import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Fixtures from "./fixtures/Fixtures.js";
import Scores from "./scores/Scores.js";
import NewsPage from "./newsPage/NewsPage.js";
import BlogBody from "./Blog.js";
import NotFound from "./components/NotFound.js";
import Loading from "./components/Loading";
function App() {
  const [blogInfo, setblogInfo] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://localhost:3001/getFrontendData');
        let result = await response.json();
        setblogInfo(JSON.parse(result));
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, []);
  
  return (
    <React.StrictMode>
      <BrowserRouter>
          <Header />
          {
            blogInfo.frontend ? (<Routes>
                <Route path="/" element={<BlogBody blogInfo={blogInfo.frontend} />}></Route>
                <Route path="/:url" element={<NewsPage posts={blogInfo.frontend} />}></Route>
                <Route path="/fixtures" element={<Fixtures />}></Route>
                <Route path="/scores" element={<Scores />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>) 
              : (
                  <Loading />
                )
          }
          <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
