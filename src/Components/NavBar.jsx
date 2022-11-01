import { useUniCon } from "../Context/UniversalContext";
function NavBar() {
  const { darkMode, setDarkMode, setSettings, name } = useUniCon();
  return (
    <div className="Navbar">
      <nav>
        <div className="header">
          <h1>Steve Here</h1>
        </div>
        <div id="openSettings">
        <a href="https://github.com/Sephens/To-Do_With-Timer-ReactApp" target="_blank" rel="noopener noreferrer">
            <img src="/public/assets/github.png" alt="repos"/>
        </a>

        {
            darkMode? <img src="/public/assets/light.png" onClick={() => {
                setDarkMode(false);
                localStorage.setItem("steveTheme", "false");
            }} alt="light mode"/> : <img src="/public/assets/dark.png" onClick={()=>{
                setDarkMode(true);
                localStorage.setItem("steveTheme", "true");
            }} alt="dark mode" />
        }

        <h3 onClick={()=>
            setSettings(true)
        }>Settings
        </h3>
        </div>

      </nav>
      <h1>Welcome {name} </h1>
    </div>
  );
}

export default NavBar;
