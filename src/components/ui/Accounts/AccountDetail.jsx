import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { colors } from '../../../assets/theme';

const Item = ({ field, value }) => {
  return (
    <div className="flex flex-col gap-1" style={{ width: '30%' }}>
      <p className="font-bold">{field}</p>
      <p>{value}</p>
    </div>
  );
};

export const AccountDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Personal Information</h1>
        <div className="flex">
          <Item field="First Name:" value="Thae" />
          <Item field="Middle Name:" value="Nandar" />
          <Item field="Last Name:" value="Seint" />
        </div>
        <div className="flex">
          <Item field="Phone Number:" value="Thae" />
          <Item field="Secondary Phone:" value="Nandar" />
          <Item field="Email:" value="Seint" />
        </div>
        <div className="flex">
          <Item field="Marital Status:" value="Thae" />
          <Item field="Mobility Status:" value="Nandar" />
          <Item field="Beneficiaries:" value="Seint" />
        </div>
        <div className="flex">
          <Item field="Age:" value="Thae" />
          <Item field="Valid State ID or License:" value="Nandar" />
          <Item field="Active Bank Account:" value="Seint" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Lead Eligibility</h1>
        <div className="flex">
          <Item field="State:" value="Thae" />
          <Item field="Need insurance for:" value="Nandar" />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: '20px' },
                }}
              />
            }
            label="Saw commercial"
            checked={true}
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
