import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          {user === null ? (
            <SignIn />
          ) : (
            <>
              <Header />
              <Navigator />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/topics" element={<Topics />}></Route>
                <Route
                  path="/topics/:topic"
                  element={<ArticlesByTopic />}
                ></Route>
                <Route
                  path="/articles/:article_id"
                  element={<SingleArticle />}
                ></Route>
              </Routes>
            </>
          )}
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
