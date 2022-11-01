import { createContext, useContext, useState } from "react";
const UniversalContext = createContext();

function UniConProvider({children}) {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("steveTheme")) ?? false);
    const [settings,setSettings] = useState(false);

    const [customTime, setCustomTime] = useState.apply(JSON.parse(localStorage.getItem("steveTheme")) ?? {
        focus: 25,
        shortBreak: 5,
        longBreak: 20
    })

    const [name, setName] = useState(localStorage.getItem("steveTheme") ?? "")

    return <UniversalContext.Provider value={{darkMode,setDarkMode, settings, setSettings, customTime, setCustomTime, name, setName }}>
        {children}
    </UniversalContext.Provider>
}

const useUniCon = () => useContext(UniversalContext)

export { useUniCon, UniConProvider}