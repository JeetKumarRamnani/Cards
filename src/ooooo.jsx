// import React from "react";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// const Pizza = (props) => {
//   const { img, name, ingredients, price, soldOut } = props;
//   return (
//     <li
//       className={`flex flex-row gap-3 w-[300px] md:w-[340px] ${
//         soldOut ? "text-grey-500" : " "
//       } `}
//     >
//       <img
//         src={img}
//         alt="spinaci"
//         width="100"
//         className={`${soldOut ? "filter grayscale opacity-80" : " "}`}
//       />
//       <div className="flex flex-col gap-1">
//         <h1 className="text-xl  ">{name}</h1>
//         <p className="">{ingredients}</p>
//         <span>{price}</span>
//       </div>
//     </li>
//   );
// };

// const Menu = () => {
//   const pizzas = pizzaData.map((pizza, i) => {
//     return (
//       <Pizza
//         img={pizza.photoName}
//         name={pizza.name}
//         ingredients={pizza.ingredients}
//         price={pizza.soldOut ? "SOLD OUT" : pizza.price}
//         key={i}
//         // Adding a unique key for React list rendering
//       />
//     );
//   });

//   // const numPizza = 0; // if condition is falsy it dont render anything on screen
//   const numPizza = pizzas.length;
//   // console.log(numPizza);

//   return (
//     <>
//       <h2 className="inline-block py-1 font-semibold my-5 leading-6 uppercase border-black border-y-2">
//         Our menu
//       </h2>

//       {/* if num of pizzas is greater then 0 then render it on screen else not */}
//       {numPizza > 0 ? (
//         <>
//           {/* jsx only return one element so for this we use fragments */}
//           <p className="text-center w-[80%] mb-10 text-base ">
//             Authentic Italian cuisine. {pizzas.length} creative dishes to choose
//             from. All from our stone oven, all organic, all delicious.
//           </p>

//           <ul className="grid md:grid-cols-2  gap-5 mb-7 items-center justify-center">
//             {/* <Pizza /> */}

//             {pizzas}

//             {/* <Pizza
//           img={pizzaData[0].photoName}
//           name={pizzaData[0].name}
//           ingredients={pizzaData[0].ingredients}
//           price={pizzaData[0].price}
//         />
//         <Pizza
//           img={pizzaData[1].photoName}
//           name={pizzaData[1].name}
//           ingredients={pizzaData[1].ingredients}
//           price={pizzaData[1].price}
//         />
//       */}
//           </ul>
//         </>
//       ) : (
//         <p className="italic text-center  text-xl text-yellow-500">
//           We're still working on our menu. Please come back later :)
//         </p>
//       )}
//     </>
//   );
// };

// const Header = () => {
//   // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   return (
//     <>
//       <header className="uppercase text-2xl   w-[100%]  text-center ">
//         <h1 className="text-yellow-400 uppercase text-center text-4xl md:text-5xl font-light tracking-wider relative block w-full">
//           Fast React Pizza Co.
//         </h1>
//       </header>
//     </>
//   );
// };

// const Footer = () => {
//   // we can put any js logic here here because it is just a javascript function
//   const hour = new Date().getHours();
//   // console.log(hour);
//   const openHour = 2;
//   const closeHour = 10;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   // const order =
//   //   hour >= openHour && hour <= closeHour
//   //     ? "we are open "
//   //     : "sorry we are closed";
//   // alert(order);
//   return (
//     <footer className="my-6 text-center">
//       {/* conditional rendering using short circuting */}
//       {isOpen ? (
//         <Order closeHour={closeHour} />
//       ) : (
//         <p className="text-md text-center italic">
//           We're happy to welcome you between {openHour}:00 and {closeHour}:00.
//         </p>
//       )}
//     </footer>
//   );
//   // return  React.createElement(
//   //   "footer",
//   //   null,
//   //   "we are open at .Come visit us or Order Online"
//   // );
// };

// function Order({ closeHour }) {
//   return (
//     <>
//       <div className="flex flex-col items-center gap-4">
//         <p className="text-md text-center italic">
//           we are open until {closeHour}:00. Come visit us or Order Online
//         </p>
//         <button className=" border-none text-lg font-medium bg-yellow-400 px-8 py-2 cursor-pointer transition duration-200 hover:bg-yellow-500 hover:text-white ">
//           Order Now
//         </button>
//       </div>
//     </>
//   );
// }

// const App = () => {
//   return (
//     <div className="max-w-[80%] w-[800px] min-h-screen m-auto flex items-center flex-col ">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// };

// export default App;
