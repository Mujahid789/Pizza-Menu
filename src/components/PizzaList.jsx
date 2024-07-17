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
  const pizza =pizzaData
  // const pizza=piza.length

  return(
  <>
  <main className="menu">
    <h2>OUR MENU</h2>
    
    {pizza ?
    <>
    <p>
    Authentic Italian cuisine. 6 creative dishes to choose from. All
    from our stone oven, all organic, all delicious.
  </p>
    <ul className="pizzas">
    {pizzaData.map((pizza)=>( 
      <
    Pizza pizzaObject = {pizza} key={pizza.name}
    />
    ))}
    
    </ul></>:null
    
    }

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

function Pizza({pizzaObject}){
  
  console.log(pizzaObject);
    const profit=25
    const percentageProfit = Math.round((profit/100)*pizzaObject.price)

    // if(pizzaObject.soldOut) return null
  return(
  
    <li className={`pizza ${pizzaObject.soldOut?"sold-out":""}`}>
    <img id="pzList" src={pizzaObject.photoName} alt={pizzaObject.name} />
    <div>
    <h3>Name: {pizzaObject.name}</h3>
    <h4>ingredients:{pizzaObject.ingredients}</h4>
    <span>Price: {pizzaObject.soldOut? "SOLD OUT":pizzaObject.price+percentageProfit}</span>
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
  
  const isOpen =hour>=openHour && hour<=closeHour
  
  return <div>
    <footer className="footer"> 
      {isOpen ?(
        <Order closeHour={closeHour}/>
      ):<div className="order">
      <p>We are CLOSED Now, Open at {openHour}:00 AM</p>
      </div> }
        </footer>
    </div>
}

function Order({closeHour}){
return(
<div className="order">
        <p>We are OPEN until {closeHour}:00 PM Come visit us or order online</p>
        <button className="btn">Order</button>
        </div>
        )
}

export default PizzaList