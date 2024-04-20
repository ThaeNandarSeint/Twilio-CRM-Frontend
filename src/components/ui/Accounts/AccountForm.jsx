import { Box } from '@mui/material';
import { Formik } from 'formik';
import {
  CustomFormLabel,
  FormCheckbox,
  FormRadioButton,
  FormSelect,
  FormInputBox,
} from '../form';
import { maritalStatuses, mobilityStatuses, states } from '../../../constants';

export const AccountForm = () => {
  return (
    <Formik initialValues={{}} validationSchema={{}} onSubmit={() => {}}>
      {(props) => (
        <form onSubmit={props.handleSubmit} className="p-3">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div>
              <h1 className="text-2xl font-bold">Add Account</h1>
              <p className="text-sm">Required to save as client</p>
            </div>

            <p className="text-xl font-bold">Confirm Lead Eligibility</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel label="State" required={true} />
                <FormSelect
                  placeholder="Select State"
                  name="state"
                  formProps={props}
                >
                  {states?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>

              <Box width="30%">
                <CustomFormLabel label="Need Insurance For" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="needInsuranceFor"
                  formProps={props}
                >
                  {['Themselves', 'Myself']?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <FormCheckbox
                name="isSawCommercial"
                formProps={props}
                label="Saw commercial"
              />
            </Box>

            <p className="text-xl font-bold">Personal Information</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel label="Age" required={true} />
                <FormInputBox
                  type="text"
                  formProps={props}
                  name="age"
                  placeholder="Enter Age"
                />
              </Box>
              <Box width="30%">
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
                  name="i"
                />
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Active bank account" required={true} />
                <FormRadioButton
                  formProps={props}
                  items={['Yes', 'no']}
                  name="i"
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel label="Marital Status" required={true} />
                <FormSelect placeholder="Select" name="state" formProps={props}>
                  {maritalStatuses.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Mobility Status" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="needInsuranceFor"
                  formProps={props}
                >
                  {mobilityStatuses?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Beneficiaries" required={true} />
                {/* <MultipleSelectWithCheckbox
                    data={data}
                    setFieldValue={setFieldValue}
                    field="reviewers"
                  /> */}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel label="Phone Number" required={true} />
                <FormSelect placeholder="Select" name="state" formProps={props}>
                  {maritalStatuses.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Secondary Number" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="needInsuranceFor"
                  formProps={props}
                >
                  {mobilityStatuses?.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Email" required={true} />
                <FormInputBox
                  type="email"
                  formProps={props}
                  name="email"
                  placeholder="Enter Email"
                />
              </Box>
            </Box>

            <p className="text-xl font-bold">Coverage Preferences</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel label="Coverage interests" required={true} />
                <FormSelect
                  placeholder="Select"
                  name="coverage_interests"
                  formProps={props}
                >
                  {maritalStatuses.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Remains will be" required={true} />
                <FormRadioButton
                  formProps={props}
                  items={['Cremated', 'Buried']}
                  name="remains_will_be"
                />
              </Box>
              <Box width="30%">
                <CustomFormLabel
                  label="Desired coverage amount"
                  required={true}
                />
                <FormSelect
                  placeholder="Select"
                  name="coverage_interests"
                  formProps={props}
                >
                  {maritalStatuses.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </FormSelect>
              </Box>
            </Box>

            <p className="text-xl font-bold">Health Questions</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="30%">
                <CustomFormLabel
                  label="Tobacco/nicotine in the past 12 months?"
                  required={true}
                />
                <FormRadioButton
                  formProps={props}
                  items={['Yes', 'No']}
                  name="remains_will_be"
                />
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Height" required={true} />
                <Box className="flex gap-2 w-3/4">
                  <div className="w-1/2">
                    <FormSelect
                      placeholder="Select"
                      name="coverage_interests"
                      formProps={props}
                    >
                      {maritalStatuses.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="w-1/2">
                    <FormSelect
                      placeholder="Select"
                      name="coverage_interests"
                      formProps={props}
                    >
                      {maritalStatuses.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                </Box>
              </Box>
              <Box width="30%">
                <CustomFormLabel label="Weight (lbs)" required={true} />
                <FormInputBox
                  type="number"
                  formProps={props}
                  name="weight"
                  placeholder="Enter Weight"
                />
              </Box>
            </Box>
            {/* <FormActionButtons
                onClick={onClose}
                innerText={oldData ? 'Update' : 'Save'}
                loading={false}
                justifyContent="right"
                width="200px"
              /> */}
          </Box>
        </form>
      )}
    </Formik>
  );
};
