import { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { colors } from '../../assets/theme';

export const CustomFormLabel = ({ label, required }) => {
  return (
    <label style={{ color: colors.black, fontWeight: 500, fontSize: '16px' }}>
      {label} {required && <span style={{ color: colors.red[800] }}>*</span>}
    </label>
  );
};

export const FormTextField = ({
  formProps: { handleBlur, handleChange, values, touched, errors },
  name,
  placeholder,
  type,
  disabled,
  inputAdornment,
  multiline,
  minRows = 0,
  value,
}) => {
  return (
    <TextField
      minRows={minRows}
      multiline={multiline}
      disabled={disabled}
      type={type}
      fullWidth
      variant="outlined"
      name={name}
      placeholder={placeholder}
      sx={{
        input: {
          color: colors.black[300],
        },
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value ?? values[name]}
      error={!!touched[name] && !!errors[name]}
      helperText={touched[name] && errors[name]}
      InputProps={inputAdornment}
    />
  );
};

export const PasswordTextField = ({
  formProps,
  width,
  label,
  name,
  placeholder,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box width={width}>
      <CustomFormLabel label={label} required={required} />
      <FormTextField
        type={showPassword ? 'text' : 'password'}
        formProps={formProps}
        name={name}
        placeholder={placeholder}
        inputAdornment={{
          endAdornment: (
            <CustomInputAdornment
              icon={
                showPassword ? (
                  <Visibility sx={{ fontSize: '22px' }} />
                ) : (
                  <VisibilityOff sx={{ fontSize: '22px' }} />
                )
              }
              onClick={() => setShowPassword(!showPassword)}
              position={'end'}
            />
          ),
        }}
      />
    </Box>
  );
};

const CustomInputAdornment = ({ onClick, icon, position }) => {
  return (
    <InputAdornment position={position}>
      <IconButton
        aria-label="toggle password visibility"
        onClick={onClick}
        edge="end"
      >
        {icon}
      </IconButton>
    </InputAdornment>
  );
};

export default CustomInputAdornment;