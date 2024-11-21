import { useContext } from 'react';
import { AllContext } from '../context/AllContext';

function Profile() {
  const { user } = useContext(AllContext);
  return (
    <div className="w-[90vw] mx-auto flex items-center text-center my-10">
      <div className=''>
        <img
          className="h-[100px] w-[100px] rounded-full border object-cover"
          src={user.photoURL}
          alt={user.displayName}
        />
        <p className='text-2xl font-semibold'>{user.displayName}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
