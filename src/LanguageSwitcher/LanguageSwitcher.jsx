import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
  const { dispatch, state } = useContext(LanguageContext);

  const changeLanguage = (e) => {
    dispatch({ type: "tilaystyr", payload: e.target.value });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <select value={state.language} onChange={changeLanguage}>
        <option value="kz">Қазақша</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <p>
        Тандалған тіл: <strong>{state.language}</strong>
      </p>
    </div>
  );
};

export default LanguageSwitcher;
