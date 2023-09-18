import './App.css';
//import Routes from "./routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/home';
import Cardapio from "./pages/cardapio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={Cardapio} path="/cardapio" exact />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
