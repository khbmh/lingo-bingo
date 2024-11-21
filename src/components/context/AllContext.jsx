import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from './firebase.config';

export const AllContext = createContext();
function AllContextProvider({ children }) {
  const [user, setUser] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const createNewUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setUserLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setUserLoading(true);
    signOut(auth);
  };
  const updateUserProfile = (updatedUser) => {
    return updateProfile(auth.currentUser, updatedUser);
  };
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => unmount();
  }, []);
  //
  //
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/khbmh/lingo-bingo-json/refs/heads/main/info.json',
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ar-SA';
    window.speechSynthesis.speak(utterance);
  }
  // passing to children
  return (
    <AllContext.Provider
      value={{
        updateUserProfile,
        logOut,
        userLoading,
        userLogin,
        user,
        setUser,
        createNewUser,
        data,
        pronounceWord,
        loader,
        setLoader,
      }}
    >
      {children}
      <Toaster />
    </AllContext.Provider>
  );
}

export default AllContextProvider;
