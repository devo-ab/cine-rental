import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);

  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <div className="max-w-7xl mx-auto">
            <Header></Header>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar></Sidebar>
              <MovieList></MovieList>
            </div>
            <Footer></Footer>
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
