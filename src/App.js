import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import SignIn from "./Components/SignIn";
import Header from "./Components/Header";
import Navigator from "./Components/Navigator";
import Home from "./Components/Home";
import Articles from "./Components/Articles";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App"></div>
        {user === null ? (
          <SignIn />
        ) : (
          <>
            <Header />
            <Navigator />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
            </Routes>
          </>
        )}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
