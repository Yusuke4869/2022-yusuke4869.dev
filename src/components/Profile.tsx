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
    <div className="pt-2">
      <p className="text-2xl underline underline-offset-2 decoration-orange-500">About Me</p>
      <div className="pl-4">
        <p>I am a student in Ibaraki Japan.</p>
        <p>Now, I like Next.js and often use it with Tailwind CSS.</p>
      </div>
    </div>
  </div>
);

export default Profile;
