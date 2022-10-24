import logo from "./logo.svg";
import "./App.css";
import Teams from "./components/showteam";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Players from "./components/showplayer";
import TeamDetails from "./components/teamdetails";
import  './components/style.css';
import Result from "./components/result";
import Api from "./components/api"
import ShowTeam from "./components/showteam"

function App() {
  return (
    <>
      {/* <div>App</div>
    <Teams/>
    
     <TeamForm/>
    <PlayerForm/> */}
      <Header />
  
      {/* <Sample/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
        <Route path="/players" element={<Players />} />
        <Route path="/teamDetails" element={<TeamDetails />} />
        <Route path="/showteam" element={<ShowTeam/>} />
        <Route path="*" element={<Api />} />
      </Routes>
   <Result/> 
    </>
  );
}

export default App;

