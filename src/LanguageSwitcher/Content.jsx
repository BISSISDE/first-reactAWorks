import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const translations = {
    kz:{
        text: "Қазақша текст",
    },
    ru: {
        text: "Русский текст",
    },
    en:{
        text: "English text",
    }
}

export default function Content () {
    const {state} = useContext(LanguageContext)
    const lang = state.language;
    const t = translations[lang]

    return(
        <div className="">
            <h1>{t.text}</h1>
        </div>
    )
}