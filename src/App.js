import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import Post from "./components/post/Post";
import MainPage from "./pages/mainPage/MainPage";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/post" element={<PostPage/>}/>
            <Route path="/post/:id" element={<Post/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
