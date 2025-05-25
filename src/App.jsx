import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <div className="max-w-7xl mx-auto">
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Header></Header>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
        <Footer></Footer>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
