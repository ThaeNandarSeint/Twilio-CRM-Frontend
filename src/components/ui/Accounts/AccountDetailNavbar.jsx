import { Box, Tab, Tabs } from '@mui/material';

export const AccountDetailNavbar = ({ value, handleChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Details" />
        <Tab label="Coverage" />
        <Tab label="History" />
      </Tabs>
    </Box>
  );
};
