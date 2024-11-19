import { createContext, useState } from 'react';
export const AllContext = createContext();
function AllContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const age = 12;
  return (
    <AllContext.Provider value={{ user, age }}>{children}</AllContext.Provider>
  );
}

export default AllContextProvider;
