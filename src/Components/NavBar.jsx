import { useUniCon } from "../Context/UniversalContext";
function NavBar() {
  const { darkMode, setDarkMode, setSettings, name } = useUniCon();
  return (
    <div className="Navbar">
      <nav>
        <div className="header">
          <h1>Steve </h1>
        </div>
        <div id="openSettings">
        

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
