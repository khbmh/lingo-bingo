import { useContext } from 'react';
import { AllContext } from '../context/AllContext';

function Profile() {
  const { user } = useContext(AllContext);

  return (
    <div className="container h-screen mx-auto flex items-center justify-center">
      {/* <div className="absolute bg-blue-700 flex flex-col justify-center items-center top-[50%] left-[50%] -translate-x-[50%]-translate-y-[50%]"> */}
      <div className="flex flex-col justify-center items-center -mt-[60vh]">
        <img
          className="h-[100px] w-[100px] rounded-full border object-cover"
          src={user.photoURL}
          alt={user.displayName}
        />
        <p className="text-lg lg:text-2xl font-semibold">{user.displayName}</p>
        <p className='text-md opacity-70'>{user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
