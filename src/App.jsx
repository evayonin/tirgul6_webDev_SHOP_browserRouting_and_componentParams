import "./App.css"
import {useState} from "react";
import TodoList from "./components/TodoList.jsx";

function App() {
const [user, setUser] = useState("");
const [users, setUsers] = useState([]);
const [student,setStudent] = useState({name:"abc",lastname:"gh"});
  const[board,setBoard] = useState(
      [
          [{value:"",color:"black"} , {value:"",color:"black"} ,{value:"",color:"black"} ],
          [{value:"",color:"black"} ,{value:"",color:"black"} ,{value:"",color:"black"} ],
          [{value:"",color:"black"} ,{value:"",color:"black"} ,{value:"",color:"black"} ]
      ]);


  const creatBoard=()=>{
      const newBoard=[]
      for (let i = 0; i < 3 ; i++) {
          const row =[]
          for (let j = 0; j < 3; j++) {
             row.push({value:"",color:"black"});
          }
          newBoard.push(row);
      }
      setBoard(newBoard);
  }

    return (
        <div>
            <TodoList/>
            {
                board.map((row,r) => {
                    row.map((col,c)=>{
                        return(
                            <div key={c+"-"+r} style={{color:col.color}}>
                                {
                                    col.value
                                }
                            </div>
                        )
                    })
                })
            }

        </div>
    );
}

export default App;
