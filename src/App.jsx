import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar></Sidebar>
        <MovieList></MovieList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
