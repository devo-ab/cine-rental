import { useReducer, useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducer/CartReducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMood, setDarkMood] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className="max-w-7xl mx-auto">
            <Header></Header>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar></Sidebar>
              <MovieList></MovieList>
            </div>
            <Footer></Footer>
          </div>
          <ToastContainer></ToastContainer>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
