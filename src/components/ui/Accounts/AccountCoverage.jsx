import { TextField } from '@mui/material';
import { colors } from '../../../assets/theme';
import { Info } from '@mui/icons-material';

const Item = ({ field, value }) => {
  return (
    <div className="flex flex-col gap-1" style={{ width: '30%' }}>
      <p className="font-bold">{field}</p>
      <p>{value}</p>
    </div>
  );
};

export const AccountCoverage = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-paleBlue p-5 rounded-lg border flex gap-2 items-center justify-between font-semibold text-darkBlue">
        <div className="flex items-center gap-3">
          <Info />
          Lead has not been signed and has been counted as a contact, not as a
          new client.
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Signing Information</h1>
        <div className="flex">
          <Item field="Completed Voice Signature:" value="Incomplete" />
          <Item field="Contract Signed:" value="--" />
          <Item field="Agent:" value="--" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Coverage Preferences</h1>
        <div className="flex">
          <Item field="Coverage Interests:" value={user?.coverageInterests} />
          <Item field="Remains will be:" value={user?.remainsWillBe} />
          <Item
            field="Desired Coverage Amount:"
            value={user?.desiredCoverageAmount}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Health Questions</h1>
        <div className="flex">
          <Item
            field="Tobacco/nicotine in the past 12 months?"
            value={user?.usedNicotine ? 'Yes' : 'No'}
          />
          <Item
            field="Height:"
            value={`${Math.ceil(user?.height?.value / 12)}' ${
              user?.height?.value % 12
            }"`}
          />
          <Item field="Weight:" value={`${user?.weight?.value} lbs`} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Medical history</h1>
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
          value="None"
        />
      </div>
      <div className="flex gap-1">
        <p className="font-bold">Has medical concerns:</p>
        <p>No</p>
      </div>
    </div>
  );
};
