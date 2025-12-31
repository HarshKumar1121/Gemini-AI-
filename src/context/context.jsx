

import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [input, setinput] = useState("");
  const [recent, setrecent] = useState("");
  const [prevprompt, setprevprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  const delaypara = (index, word) => {
    setTimeout(() => {
      setresultdata((prev) => prev + word);
    }, 40 * index);
  };

  const newchat = () => {
    setshowresult(false);
    setresultdata("");
    setinput("");
  };

  const onSent = async (prompt) => {
    const text = prompt || input;
    if (!text) return;

    setresultdata("");
    setloading(true);
    setshowresult(true);
    setrecent(text);

    let response = "";

    try {
      response = await runChat(text);
    } catch (err) {
      setresultdata("⚠️ Gemini backend not responding.");
      setloading(false);
      return;
    }

    setprevprompt((prev) => [...prev, text]);

    let formatted = "";
    const parts = response.split("**");

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        formatted += parts[i];
      } else {
        formatted += "<b>" + parts[i] + "</b>";
      }
    }

    const finalText = formatted.replace(/\n/g, "<br/>");
    const words = finalText.split(" ");

    setresultdata("");

    words.forEach((word, i) => {
      delaypara(i, word + " ");
    });

    setloading(false);
    setinput("");
  };

  return (
    <Context.Provider
      value={{
        input, setinput,
        prevprompt, setprevprompt,
        showresult, setshowresult,
        loading, setloading,
        resultdata, setresultdata,
        recent, setrecent,
        onSent, newchat,
      }}
    >
      {children}
    </Context.Provider>
  );
}
