import { Box } from '@mui/material';
import { Formik } from 'formik';
import { useQueryClient } from 'react-query';
import {
  CustomFormLabel,
  FormTextField,
  PasswordPolicy,
  PasswordTextField,
} from './form';
import { FormActionButtons } from './button';

export const UserForm = ({ onClose, oldData, isChangePassword }) => {
  //   const { data } = useGetAllDepartments({
  //     limit: 0,
  //   });

  //   const { mutate: createMutation, isLoading: createLoading } = useCreateUser();
  //   const { mutate: editMutation, isLoading: editLoading } = useEditUser();
  //   const { mutate: editPasswordMutation, isLoading: editPasswordLoading } =
  //     useEditPassword();

  const queryClient = useQueryClient();

  //   let departments;
  //   if (data?.payload) {
  //     departments = data?.payload?.map((department) => ({
  //       ...department,
  //       value: department.name,
  //     }));
  //   }

  return (
    <Formik initialValues={{}} validationSchema={{}} onSubmit={() => {}}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box width="50%">
                <CustomFormLabel label="Name" required={true} />
                <FormTextField
                  type="text"
                  formProps={props}
                  name="name"
                  placeholder="Enter Name"
                />
              </Box>
              <Box width="50%">
                <CustomFormLabel label="Email" required={true} />
                <FormTextField
                  disabled={oldData}
                  type="email"
                  formProps={props}
                  name="email"
                  placeholder="Enter Email"
                />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <PasswordTextField
                required={true}
                formProps={props}
                label="Password"
                name="password"
                placeholder="Enter Password"
                width="50%"
              />
              <PasswordTextField
                required={true}
                formProps={props}
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                width="50%"
              />
            </Box>
            <PasswordPolicy />
            <FormActionButtons
              onClick={onClose}
              innerText={oldData ? 'Update' : 'Save'}
              loading={false}
              justifyContent="right"
              width="200px"
            />
          </Box>
        </form>
      )}
    </Formik>
  );
};
