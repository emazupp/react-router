import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutusPage";
import PostListPage from "./pages/PostListPage";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/aboutus" Component={AboutUsPage} />
          <Route path="/posts" Component={PostListPage}>
            <Route path="/:id" Component={SinglePostPage}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
