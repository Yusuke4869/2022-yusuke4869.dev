import type { FC } from "react";

const Profile: FC = () => (
  <div>
    <div className="flex justify-center items-center">
      <img
        className="h-24 rounded-full border-2 border-solid border-slate-100"
        src="https://github.com/yusuke4869.png"
        alt="avatar"
      />
      <div className="ml-4">
        <h1 className="text-3xl font-bold">Yusuke</h1>
        <p>Student and Developer</p>
      </div>
    </div>
  </div>
);

export default Profile;
