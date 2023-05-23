import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [footerYear, setFooterYear] = useState(new Date().getFullYear());

  return (
    <GlobalContext.Provider value={{ footerYear, setFooterYear }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
