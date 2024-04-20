import {
  AutoAwesome,
  Close,
  EmailOutlined,
  LocalPhone,
  WhatsApp,
} from '@mui/icons-material';

export const AccountInformation = () => {
  return (
    <div className="p-3">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-3 py-2">
          <h1 className="text-2xl font-bold">Thae</h1>
          <div className="flex gap-1">
            <div
              className="border-black border-2 rounded-2xl flex justify-center items-center "
              style={{ width: '30px', height: '30px' }}
            >
              <LocalPhone />
            </div>
            <div
              className="border-black border-2 rounded-2xl flex justify-center items-center "
              style={{ width: '30px', height: '30px' }}
            >
              <WhatsApp />
            </div>
            <div
              className="border-black border-2 rounded-2xl flex justify-center items-center "
              style={{ width: '30px', height: '30px' }}
            >
              <EmailOutlined />
            </div>
          </div>
        </div>
        <div className="bg-palePurple px-2 py-1 w-28 rounded-xl border flex gap-2 items-center text-purple">
          <AutoAwesome />
          Prospect
        </div>
        <div className="bg-palePurple p-5 rounded-lg border flex gap-2 items-center justify-between text-purple">
          <div className="flex items-center gap-3">
            <AutoAwesome />
            Prospects are auto-generated based on interactions such as missed
            calls or filling out the online form.
          </div>
          <Close />
        </div>
      </div>
    </div>
  );
};
