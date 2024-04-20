import {
  CallOutlined,
  EmailOutlined,
  ForumOutlined,
  HeadsetMic,
  MailOutline,
} from '@mui/icons-material';

export const AccountHistory = () => {
  return (
    <div className="pl-5">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 border-2 border-gray-500 p-3">
            <ForumOutlined />
          </span>
          <div className="text-gray-500 flex flex-col gap-2">
            <div>SMS: 06/21 - 12:07 PM</div>
            <p className="flex gap-2 items-center">
              <MailOutline sx={{ fontSize: '20px' }} />
              Yes, I will be available this afternoon. Please have them ready by
              1PM. I sho...
            </p>
            <p className="flex gap-2 items-center">
              <HeadsetMic sx={{ fontSize: '20px' }} />
              Hannah Wells
            </p>
          </div>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 border-2 border-gray-500 p-3">
            <EmailOutlined />
          </span>
          <div className="text-gray-500 flex flex-col gap-2">
            <div>Email: 06/21 - 12:07 PM</div>
            <p className="flex gap-2 items-center">
              <MailOutline sx={{ fontSize: '20px' }} />
              Thank you for your assistance.
            </p>
            <p className="flex gap-2 items-center">
              <HeadsetMic sx={{ fontSize: '20px' }} />
              Hannah Wells
            </p>
          </div>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 border-2 border-gray-500 p-3">
            <CallOutlined />
          </span>
          <div className="text-gray-500 flex flex-col gap-2">
            <div>Call: 06/21 - 12:07 PM</div>
            <p className="flex gap-2 items-center">
              <MailOutline sx={{ fontSize: '20px' }} />
              Hello. Thank you for calling...
            </p>
            <p className="flex gap-2 items-center">
              <HeadsetMic sx={{ fontSize: '20px' }} />
              Hannah Wells
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};
