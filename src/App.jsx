import "./App.css"
import Board from "./components/Board.jsx";
import {useState} from "react";
import TodoList from "./components/TodoList.jsx";
import Ex1 from "./components/Ex1.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";


function App() {
   const [products, setProducts] = useState([
       {name:"apple",price:"5",color:"red"},
       {name:"banana",price:"6",color:"yellow"},
       {name:"book",price:"55",color:"pink"}]);

   const [cart,setCart] = useState([])


const addToCart=(product)=>{
       setCart([...cart,product])

    console.log(cart)
}
    return (
        <div>

            {
                products.map((item,index)=>{
                    return (
                        <Product key={index} product={item} addToCart={addToCart} />
                    )
                })
            }

           {/*<BrowserRouter>*/}
           {/*    <Navbar />*/}

           {/*    <Routes>*/}
           {/*        <Route path={"/"} element={<HomePage />}/>*/}
           {/*        <Route path={"/todolist"} element={<TodoList />}/>*/}
           {/*        <Route path={"/board"} element={<Board/>}/>*/}
           {/*    </Routes>*/}
           {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
