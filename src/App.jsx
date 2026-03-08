import "./App.css";
import Navbar from "./Components/Header/Navbar";
function App() {
  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>
      <main className="bg-base-200 min-h-screen ">
        {/* Hero section */}
        <section className="flex gap-10 w-11/12 mx-auto pt-10 justify-center">
          {/* In-Progress */}
          <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-177 h-62.5 flex items-center justify-center text-white font-semibold text-2xl">
            <h2>In-Progress</h2>
          </div>
          {/* Resolved */}
          <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] w-177 h-62.5 flex items-center justify-center text-white font-semibold text-2xl">
            <h2>Resolved</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
