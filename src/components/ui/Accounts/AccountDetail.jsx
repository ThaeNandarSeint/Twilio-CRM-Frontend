import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { colors } from '../../../assets/theme';

const Item = ({ field, value }) => {
  return (
    <div className="flex flex-col gap-1" style={{ width: '30%' }}>
      <p className="font-bold">{field}</p>
      <p className="text-wrap">{value}</p>
    </div>
  );
};

export const AccountDetail = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Personal Information</h1>
        <div className="flex">
          <Item field="First Name:" value={user?.name?.first} />
          <Item field="Middle Name:" value={user?.name?.middle} />
          <Item field="Last Name:" value={user?.name?.last} />
        </div>
        <div className="flex">
          <Item field="Phone Number:" value={user?.phoneNumber?.primary} />
          <Item field="Secondary Phone:" value={user?.phoneNumber?.secondary} />
          <Item field="Email:" value={user?.email} />
        </div>
        <div className="flex">
          <Item field="Marital Status:" value={user?.maritalStatus} />
          <Item field="Mobility Status:" value={user?.mobilityStatus} />
          <Item field="Beneficiaries:" value="Seint" />
        </div>
        <div className="flex">
          <Item field="Age:" value={user?.age} />
          <Item
            field="Valid State ID or License:"
            value={user?.hasValidDriverLicenseOrStateId ? 'Yes' : 'No'}
          />
          <Item
            field="Active Bank Account:"
            value={user?.hasActiveBankAccount ? 'Yes' : 'No'}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Lead Eligibility</h1>
        <div className="flex">
          <Item field="State:" value={user?.state} />
          <Item field="Need insurance for:" value={user?.needInsuranceFor} />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: '20px' },
                }}
              />
            }
            label="Saw commercial"
            checked={user?.isSawCommercial}
            disabled={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Notes</h1>
        <TextField
          minRows={2}
          multiline={true}
          disabled={true}
          type="text"
          fullWidth
          variant="outlined"
          sx={{
            input: {
              color: colors.black[300],
              height: '10px',
            },
          }}
          value="Something is written here."
        />
      </div>
    </div>
  );
};
