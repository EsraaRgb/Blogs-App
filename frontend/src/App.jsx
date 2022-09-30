import Header from "./components/Header/Header";
import Add from "./pages/Add/Add";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
