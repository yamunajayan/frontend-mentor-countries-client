import "./App.css";

import Header from "./components/Header/Header";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import HomePage from "./pages/HomePage/HomePage";
import { useAppSelector } from "./redux/hook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <BrowserRouter>
      <main
        className={` ${
          darkMode ? "dark-mode-main" : "light-mode-main"
        } min-h-screen`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountriesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
