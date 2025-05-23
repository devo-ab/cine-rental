import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
