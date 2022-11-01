import './App.css';
import { NavBar, Settings, TaskContainer, TimerContainer} from "./Components";
import { useTimer} from "./Context/TimerContext";
import { useUniCon } from "./Context/UniversalContext";
import { setMode } from "./Utils/mode";

function App() {
  const { focus, shortBreak, longBreak} = useTimer();
  const { darkMode } = useUniCon();

  return (
    <div id={setMode(darkMode, focus, shortBreak, longBreak)} className="App">
    <NavBar/>

    <h1>Hello</h1>
      
    </div>
  );
}

export default App;
