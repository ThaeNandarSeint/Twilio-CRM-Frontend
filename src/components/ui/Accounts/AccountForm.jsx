import { Formik } from 'formik';
import {
  CustomFormLabel,
  FormCheckbox,
  FormRadioButton,
  FormSelect,
  FormInputBox,
} from '../form';
import {
  maritalStatuses,
  mobilityStatuses,
  possibleHeights,
  states,
  userTypes,
} from '../../../constants';
import { createUserSchema, initialUserValues } from '../../../schemas';
import { useCreateUser, useEditUser } from '../../../services/user';
import { toast } from 'react-toastify';
import { queryClient } from '../../../lib';
import { useState } from 'react';

export const AccountForm = ({ oldData }) => {
  const [userType, setUserType] = useState();

  const { mutate: createMutation } = useCreateUser();
  const { mutate: updateMutation } = useEditUser();

  const handleCreate = ({
    hasActiveBankAccount,
    hasValidDriverLicenseOrStateId,
    usedNicotine,
    weight,
    height,
    isSawCommercial,
    ...data
  }) => {
    createMutation(
      {
        ...data,
        hasActiveBankAccount: JSON.parse(hasActiveBankAccount),
        hasValidDriverLicenseOrStateId: JSON.parse(
          hasValidDriverLicenseOrStateId
        ),
        usedNicotine: JSON.parse(usedNicotine),
        weight: { ...weight, unit: 'lb' },
        height: {
          value: height.feet * 12 + parseInt(height.inches),
          unit: 'inches',
        },
        isSawCommercial: Boolean(isSawCommercial.length),
        type: userType,
      },
      {
        onSuccess: () => {
          toast.success('ok');
          queryClient.invalidateQueries(['users']);
        },
      }
    );
  };

  const handleUpdate = ({
    hasActiveBankAccount,
    hasValidDriverLicenseOrStateId,
    usedNicotine,
    weight,
    height,
    isSawCommercial,
    ...data
  }) => {
    updateMutation(
      {
        id: oldData?._id,
        data: {
          ...data,
          hasActiveBankAccount: JSON.parse(hasActiveBankAccount),
          hasValidDriverLicenseOrStateId: JSON.parse(
            hasValidDriverLicenseOrStateId
          ),
          usedNicotine: JSON.parse(usedNicotine),
          weight: { ...weight, unit: 'lb' },
          height: {
            value: height.feet * 12 + parseInt(height.inches),
            unit: 'inches',
          },
          isSawCommercial: Boolean(isSawCommercial.length),
          type: userType,
        },
      },
      {
        onSuccess: () => {
          toast.success('ok');
          queryClient.invalidateQueries(['users']);
        },
      }
    );
  };
  return (
    <Formik
      initialValues={oldData ?? initialUserValues}
      validationSchema={createUserSchema}
      onSubmit={oldData ? handleUpdate : handleCreate}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} style={{ maxWidth: '100vw' }}>
          <div className="flex gap-2 flex-col p-3 ">
            <div>
              <h1 className="text-2xl font-bold">
                {oldData ? 'Edit' : 'Add'} Account
              </h1>
              <p className="text-sm">Required to save as client</p>
            </div>

            <p className="text-xl font-bold">Confirm Lead Eligibility</p>

            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="State" required={true} />
                <FormSelect
                  placeholder="Select State"
                  name="state"
                  formProps={props}
                  error={props.errors?.state}
                  value={props.values?.state}
                >
                  {states?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </div>

              <div className="w-1/3">
                <CustomFormLabel label="Need Insurance For" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="needInsuranceFor"
                  formProps={props}
                  error={props.errors?.needInsuranceFor}
                  value={props.values?.needInsuranceFor}
                >
                  {['Themselves', 'MySelf']?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <FormCheckbox
                formProps={props}
                label="Saw Commercial"
                name="isSawCommercial"
              />
            </div>

            <p className="text-xl font-bold">Personal Information</p>

            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="First Name" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="name.first"
                  placeholder="First Name"
                  error={props.errors?.name?.first}
                  value={props.values?.name?.first}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Middle Name" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="name.middle"
                  placeholder="Enter Middle Name"
                  error={props.errors?.name?.middle}
                  value={props.values?.name?.middle}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Last Name" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="name.last"
                  placeholder="Enter Last Name"
                  error={props.errors?.name?.last}
                  value={props.values?.name?.last}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="Age" required={true} />
                <FormInputBox
                  type="number"
                  formProps={props}
                  name="age"
                  placeholder="Enter Age"
                  error={props.errors?.age}
                  value={props.values?.age}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel
                  label="Valid driver’s license or state ID"
                  required={true}
                />
                <FormRadioButton
                  formProps={props}
                  items={[
                    { value: true, text: 'Yes' },
                    { value: false, text: 'No' },
                  ]}
                  name="hasValidDriverLicenseOrStateId"
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Active bank account" required={true} />
                <FormRadioButton
                  formProps={props}
                  items={[
                    { value: true, text: 'Yes' },
                    { value: false, text: 'No' },
                  ]}
                  name="hasActiveBankAccount"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="Marital Status" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="maritalStatus"
                  formProps={props}
                  error={props.errors?.maritalStatus}
                  value={props.values?.maritalStatus}
                >
                  {[...Object.values(maritalStatuses)].map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Mobility Status" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="mobilityStatus"
                  formProps={props}
                  error={props.errors?.mobilityStatus}
                  value={props.values?.mobilityStatus}
                >
                  {[...Object.values(mobilityStatuses)]?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Beneficiaries" required={true} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="Phone Number" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="phoneNumber.primary"
                  placeholder="Enter Phone Number"
                  error={props.errors?.phoneNumber?.primary}
                  value={props.values?.phoneNumber?.primary}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Secondary Number" />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="phoneNumber.secondary"
                  placeholder="Enter Secondary Number"
                  error={props.errors?.phoneNumber?.secondary}
                  value={props.values?.phoneNumber?.secondary}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Email" required={true} />
                <FormInputBox
                  type="email"
                  formProps={props}
                  name="email"
                  placeholder="Enter Email"
                  error={props.errors?.email}
                  value={props.values?.email}
                />
              </div>
            </div>

            <p className="text-xl font-bold">Coverage Preferences</p>

            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel label="Coverage interests" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="coverageInterests"
                  placeholder="Enter Coverage Interests"
                  error={props.errors?.coverageInterests}
                  value={props.values?.coverageInterests}
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Remains will be" required={true} />
                <FormRadioButton
                  formProps={props}
                  items={[
                    { value: 'cremated', text: 'Cremated' },
                    { value: 'buried', text: 'Buried' },
                  ]}
                  name="remainsWillBe"
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel
                  label="Desired coverage amount"
                  required={true}
                />
                <FormInputBox
                  type="number"
                  formProps={props}
                  name="desiredCoverageAmount"
                  placeholder="Enter Coverage Amount"
                  error={props.errors?.desiredCoverageAmount}
                  value={props.values?.desiredCoverageAmount}
                />
              </div>
            </div>

            <p className="text-xl font-bold">Health Questions</p>

            <div className="flex gap-2">
              <div className="w-1/3">
                <CustomFormLabel
                  label="Tobacco/nicotine in the past 12 months?"
                  required={true}
                />
                <FormRadioButton
                  formProps={props}
                  items={[
                    { value: true, text: 'Yes' },
                    { value: false, text: 'No' },
                  ]}
                  name="usedNicotine"
                />
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Height" required={true} />
                <div className="flex gap-2 w-3/4">
                  <div className="w-1/2">
                    <FormSelect
                      placeholder="Select"
                      name="height.feet"
                      formProps={props}
                      error={props.errors?.height?.feet}
                      value={props.values?.height?.feet}
                    >
                      {possibleHeights.feets.map((item) => (
                        <option value={item.value} key={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="w-1/2">
                    <FormSelect
                      placeholder="Select"
                      name="height.inches"
                      formProps={props}
                      error={props.errors?.height?.inches}
                      value={props.values?.height?.inches}
                    >
                      {possibleHeights.inches.map((item) => (
                        <option value={item.value} key={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <CustomFormLabel label="Weight (lbs)" required={true} />
                <FormInputBox
                  type="number"
                  formProps={props}
                  name="weight.value"
                  placeholder="Enter Weight"
                  error={props.errors?.weight?.value}
                  value={props.values?.weight?.value}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end border-t-2 p-3 gap-2">
            {!oldData ? (
              <button
                className="border-2 flex items-center gap-1 p-2 rounded"
                type="submit"
                onClick={() => setUserType(userTypes.LEAD)}
              >
                Save Lead
              </button>
            ) : (
              oldData?.type === userTypes.LEAD && (
                <button
                  className="border-2 flex items-center gap-1 p-2 rounded"
                  type="submit"
                  onClick={() => setUserType(userTypes.LEAD)}
                >
                  Edit Lead
                </button>
              )
            )}

            {!oldData ? (
              <button
                className="bg-blue text-white border-2 flex items-center gap-1 p-2 rounded"
                type="submit"
                onClick={() => setUserType(userTypes.CLIENT)}
              >
                Save Client
              </button>
            ) : (
              oldData?.type === userTypes.CLIENT && (
                <button
                  className="bg-blue text-white border-2 flex items-center gap-1 p-2 rounded"
                  type="submit"
                  onClick={() => setUserType(userTypes.CLIENT)}
                >
                  Edit Client
                </button>
              )
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};
