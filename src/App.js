import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepost/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
