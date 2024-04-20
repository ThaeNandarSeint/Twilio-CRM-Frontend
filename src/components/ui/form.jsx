import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Cancel, Search, Visibility, VisibilityOff } from '@mui/icons-material';
import { colors } from '../../assets/theme';
import { useMultipleSelectWithCheckbox } from '../../hooks';

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
          height: '10px',
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

export const CustomInputAdornment = ({ onClick, icon, position }) => {
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

const policies = [
  'Password must be at least 8 characters',
  'Password must be at most 16 characters',
  'Password must contain at least one lowercase letter. [a-z]',
  'Password must contain at least one uppercase letter. [A-Z]',
  'Password must contain at least one number. [0-9]',
  'Password must contain at least one special character. [!@#$%^&*(),.?":{}|<>]',
];

export const PasswordPolicy = () => {
  return (
    <Box sx={{ ml: 3 }}>
      <ul style={{ listStyle: 'disc' }}>
        {policies.map((policy) => (
          <li key={policy}>{policy}</li>
        ))}
      </ul>
    </Box>
  );
};

export const FormCheckbox = ({
  defaultValue,
  label,
  name,
  disabled,
  formProps: { values, handleBlur, handleChange },
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            '& .MuiSvgIcon-root': { fontSize: '20px' },
          }}
        />
      }
      label={label}
      checked={defaultValue ? defaultValue : values[name]}
      value={defaultValue ? defaultValue : values[name]}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export const FormSelect = ({
  children,
  placeholder,
  name,
  formProps: { values, handleChange },
}) => {
  return (
    <select
      onChange={handleChange}
      name={name}
      value={values[name]}
      className={`bg-transparent border rounded w-[100%] outline-none focus:border-black-400 block p-1`}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {children}
    </select>
  );
};

export const FormInputBox = ({
  formProps: { values },
  name,
  placeholder,
  type,
  disabled,
}) => {
  return (
    <input
      type={type}
      className={`bg-transparent border border-black rounded w-[100%] outline-none focus:border-black-400 block px-3 py-1`}
      placeholder={placeholder}
      name={name}
      value={values[name]}
      disabled={disabled}
    />
  );
};

export const FormRadioButton = ({
  items,
  name,
  formProps: { handleChange },
}) => {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <div key={item.value} className="flex items-center">
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={handleChange}
          />
          <label htmlFor={item.value}>{item.text}</label>
        </div>
      ))}
    </div>
  );
};

const calculateCount = (departments) => {
  return departments.filter((department) => department.isChecked === true)
    .length;
};

export const MultipleSelectWithCheckbox = ({ data, setFieldValue, field }) => {
  const {
    isOpen,
    onClose,
    onOpen,
    handleChange,
    handleFilter,
    handleSearch,
    handleSearchCancel,
    items,
    search,
    searchedItems,
  } = useMultipleSelectWithCheckbox({ data, setFieldValue, field });

  return (
    <div className="filter_container" style={{ maxWidth: '100%' }}>
      <div
        className={`filter_select_btn ${isOpen && 'open'}`}
        onClick={isOpen ? onClose : onOpen}
      >
        <span className="filter_select_btn_text">
          {calculateCount(items) === 0
            ? 'Please select Name which you would like to mention'
            : `${calculateCount(items)} Users Selected`}
        </span>
      </div>

      <ul className="filter_list_items">
        <div className="filter_search">
          <Search className="filter_search_icon" />
          <input
            spellCheck="false"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {search !== '' && (
            <div
              className="filter_search_cancel_btn"
              onClick={handleSearchCancel}
            >
              <Cancel sx={{ color: colors.grey[800] }} />
            </div>
          )}
        </div>
        <Button onClick={() => handleChange({ name: 'clearAll' })}>
          Clear All
        </Button>
        {search === ''
          ? items.map((department) => {
              return (
                <li className="filter_item" key={department._id}>
                  <FormControlLabel
                    name={department.name}
                    control={<Checkbox />}
                    label={department.name}
                    checked={department?.isChecked || false}
                    onChange={({ target: { name, checked } }) =>
                      handleChange({ name, checked, items })
                    }
                  />
                </li>
              );
            })
          : searchedItems.map((department) => (
              <li className="filter_item" key={department._id}>
                <FormControlLabel
                  name={department.name}
                  control={<Checkbox />}
                  label={department.name}
                  checked={department?.isChecked || false}
                  onChange={({ target: { name, checked } }) =>
                    handleChange({ name, checked, items: searchedItems })
                  }
                />
              </li>
            ))}
        <Box display="flex" justifyContent="center" gap={2}>
          <Button onClick={onClose} fullWidth variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleFilter} fullWidth variant="contained">
            OK
          </Button>
        </Box>
      </ul>
    </div>
  );
};
