import "../index.css"
import pizzaData from "../assets/data.js"
function PizzaList() {
  return (
    <><div className="container">
   
        {/* <h2>PizzaList</h2> */}
        <Header/>
        <Menu pizza={pizzaData}/>
        <Footer/>

      </div>
      </>
      
  )
}

function Menu(){
  return(
  <>
  <main className="menu">
    <h2>OUR MENU</h2>
    <ul className="pizzas">
    {pizzaData.map((pizza)=>( 
      <
    Pizza pizzaObject = {pizza} key={pizza.name}
    />
    ))}
    
    </ul>

    {/* <Pizza/> */}


    {/* <Pizza PizzaName="Spinaci Pizza" photoName = "Pizza/spinaci.jpg" price={10} 
    ingredients= "Tomato, mozarella, spinach, and ricotta cheese"/>

    <Pizza PizzaName="Pizza Funghi" photoName = "Pizza/funghi.jpg" price={12}
    ingredients= "Tomato, mozarella, mushrooms, and onion"/>

    <Pizza PizzaName="Pizza Salamino" photoName = "Pizza/salamino.jpg" price={15} 
    ingredients= "Tomato, mozarella, and pepperoni"/> */}
      
    </main>
  
  </>
  )
  }

function Pizza(props){
    const profit=25
    const percentageProfit = Math.round((profit/100)*props.pizzaObject.price)
  return(
  
    <li className="pizza">
    <img id="pzList" src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
    <div>
    <h3>Name: {props.pizzaObject.name}</h3>
    <h4>ingredients:{props.pizzaObject.ingredients}</h4>
    <span>{props.pizzaObject.price+percentageProfit}</span>
    </div>
    </li>
    
  )
  }

function Header(){
    return (
    <header className="header">
      <h1> React Pizza Shop</h1>
    </header>
    )
}


function Footer(){
  const hour = new Date().getHours();
  const openHour =10
  const closeHour = 20
  
  const open =hour>=openHour && hour<=closeHour
  console.log(open);

  return <div>
    <footer className="footer">{new Date().toLocaleString()}. We are currently open</footer>
    </div>
}

export default PizzaList