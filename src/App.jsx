import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutusPage";
import PostListsPage from "./pages/PostListsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/aboutus" Component={AboutUsPage}></Route>
        <Route path="/postlists" Component={PostListsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
