import { createContext, useEffect, useState } from 'react';
export const AllContext = createContext();
function AllContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
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

  return (
    <AllContext.Provider value={{ user, data, pronounceWord }}>
      {children}
    </AllContext.Provider>
  );
}

export default AllContextProvider;
