import { createContext, useState } from "react";

export const titleContext = createContext();

export const TitleContextSubject = ({ children }) => {
  const [titleSubject, setTitleSubject] = useState("");
  const [titleVisible, setTitleVisible] = useState(false);
  const onTitleSubject = (title) => {
    setTitleSubject(title);
  };

  const value = { titleSubject, onTitleSubject, titleVisible, setTitleVisible };
  return (
    <titleContext.Provider value={value}>{children}</titleContext.Provider>
  );
};
