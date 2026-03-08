import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/CardSection/Card";
import Navbar from "./Components/Header/Navbar";
import Cart from "./Components/CardSection/Cart";
function App() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  // Add to cart
  const handleAddToCart = (card) => {
    const newCart = [...cart, card];
    setCart(newCart);
  };

  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>
      <main className="bg-base-200 min-h-screen ">
        {/* Hero section */}
        <section className="flex gap-10  mx-auto pt-10 justify-center lg:w-[1440px] w-11/12">
          {/* In-Progress */}
          <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-177 h-62.5 flex items-center justify-center text-white font-semibold text-2xl">
            <h2>In-Progress {cart.length}</h2>
          </div>
          {/* Resolved */}
          <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] w-177 h-62.5 flex items-center justify-center text-white font-semibold text-2xl">
            <h2>Resolved</h2>
          </div>
        </section>

        {/* Tickets Section */}
        <section className="lg:w-[1440px] mx-auto lg:w-[1050px] mt-10 w-11/12">
          <h1 className="text-2xl font-semibold">Customer Tickets</h1>
          <div className="flex gap-5 justify-center mt-5">
            <div className="Tickets card  grid lg:grid-cols-2  gap-5 justify-self-center  ">
              {cards.map((card) => (
                <Card handleAddToCart={handleAddToCart} card={card} />
              ))}
            </div>

            {/* customer */}
            <div className="task  lg:w-[358px] w-[70%] flex flex-col gap-5">
              {cart.map((c) => (
                <Cart c={c} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
