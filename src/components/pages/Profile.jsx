import { useContext } from 'react';
import { AllContext } from '../context/AllContext';

function Profile() {
  const { user } = useContext(AllContext);
  console.log(user);
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center">
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;
