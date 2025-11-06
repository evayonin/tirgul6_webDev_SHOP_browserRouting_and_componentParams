import { useState } from "react";
import "./App.css"
function Counter() {
    // יש לכתוב תוכנית שמציגה למשתמש שדה קלט תגית של שם ,ו3 כפתורים
    // כפתור להצגה בקונסול, כפתור להצגה במסך , וכפתור להצגה ב -Alert
    // המשתמש יכניס את השם שלו ילחץ על הכפתור נדפיס את השם במקום המתאים לפי בחירת המשתמש

   const [name, setName] = useState("");

    const showNameC = () => {
       console.log(name);
    };

    const showNameA = () => {
    alert(name)
    };

    return (
        <div>
            <h1>{name}</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <br/>
            <button onClick={showNameA}>name with alert</button>
            <button onClick={showNameC}>name with console</button>
            {/*<button onClick={showName}>name with screen</button>*/}
        </div>
    );
}

export default Counter;
