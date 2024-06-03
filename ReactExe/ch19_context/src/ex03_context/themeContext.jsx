import { createContext } from "react";

const theme1 = { border: "10px solid gold" };
const themeContext1 = createContext(theme1);

const theme2 = { border: "10px solid bule" };
const themeContext2 = createContext(theme2);

export { themeContext1, themeContext2 };
