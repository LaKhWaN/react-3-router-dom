import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("User");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>ERROR 404</h1>} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
