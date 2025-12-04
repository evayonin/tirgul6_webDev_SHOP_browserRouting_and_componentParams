// מהתרגיל SHOP - תרגול 6 - 4/12/25

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
       setCart([...cart,product]) // הוספת המוצר למערך cart

    console.log(cart) // הדפסה בקונסולה כדי לראות שהמערך מכיל מוצר נוסף אחרי לחיצת כפתור ההוספה
}
    return (
        <div>
            {
                // כדי ליצור מכל אחד מ3 המוצרים שהגדרנו למעלה קומפוננטת מוצר - למי מה שהיא מצפה לקבל בפרמטרים שהגדרנו לה ( הגדרנו אותם עם {} כלומר לא כprops אלא כאובייקטים או מתודות שאפשר להשתמש בהם גם באותה קומפוננטה.
                products.map((item,index)=>{
                    return (
                        <Product // עבור כל item נייבא קומפוננטת מוצר שנשלח למה מה שהיא מצפה לקבל - ככה קומפוננטה אחרת יכולה להשתמש בקונסטים(משתנים)/מתודות של קומפוננטה אחרת - ע״י הגדרת פרמטרים ספציפיים שהיא תצפה לקבל
                            // אבל היה אפשר גם לעשות באמצעות props.name מכאן ושהקומפוננטה Product הייתה מקבלת פשוט props, אבל אנחנו רוצים שזה יהיה בקומפוננטה עצמה.
                            // אנחנו לא רוצים לשלוח עבור כל קומפוננת מוצר שניצור פה במפה שדות שנשלח עם הprops - אנחנו רוצים רק לשלוח את המוצר והמתודה שתצפה לקבל ושהקומפוננטה Product תעשה עם זה מה שהיא רוצה בתוכה. וכך עבור כל אחת כזו.
                            // כדי לא לעשות פה עבור כל item משהו כזה:
                            // {
                            //   props.name: "abc",
                            //   props.price: "100",
                            //   props.color: "red"
                            //  }
                            // זו דרך אחרת לנהל את זה וכדי לאפשר שימוש בקומפוננטה אחרת.
                            key={index} // חייב כי ככה ריאקט עוקבת אחרי הנוכחי
                            product={item}  // הקומפוננטה מצפה לקבל פרמטר producy שזה המוצר הנוכחי שבמקרה שלו במפה נקרא item
                            addToCart={addToCart}  // הקומפוננטה מצפה לקבל פרמטר נוסף שכאן אנחנו שולחים על ידיו את המתודה addToCart כדי שנוכל להשתמש בה גם בקומפוננטה Product ולא רק פה
                            {/*ירנדר כל קומפוננת מוצר לפי מה שעושים בתוכה (בריטרן שלה) עם מה ששלחנו לה.*/}
                        />
                    )
                })
            }

            {/* הערות מתחילת השיעור לגבי ניתוב:
             ראינו התחילת השיעור איך אפשר לנתב לעמודים שונים את האפליקציה בדפדפן ע״י ספרייה שנקראת react-router-dom.
              כדי להתקין אותה צריך לכתוב בטרמינל: npm install react-router-dom
               עכשיו כל קומפוננטה שנרצה להציג באפליקציית הדפדפן אך ב״עמוד״ שונה - נוסיף לה ניתוב.
                כדי להשתמש בזה צריך לשים בreturn() את התגיות הבאות: */}

           {/*<BrowserRouter>*/}    {/*התגית שבכלל מאפשרת את הניתוב.*/}
           {/*    <Navbar />*/}    {/*יבוא של הקומפוננטה שתציג לנו את תפריט הבחירה - מה שינווט את המשתמש לעמודים השונים (מה שביקשו בתרגיל). חייב לקרוא לקומפוננטה בתוך תגית BrowserRouter כדי שיציג ויעבוד!!*/}

           {/*    <Routes>*/}    {/*התגית שבה נשים את כל הניתובים שיהיו לנו*/}
           {/*        <Route path={"/"} element={<HomePage />}/>*/}    {/*ניתוב של קומפוננטה (עמוד) יחידה - דף הבית תמיד יהיה רק ״/״. מה שבתכונה path זה החלק שמוסיפים לנתיב בדפדפן כדי להגיע לעמוד, ומה שבתכונה element זו הקומפוננטה - ככה מייבאים אותה ומקשרים אותה לנתיב.*/}
           {/*        <Route path={"/todolist"} element={<TodoList />}/>*/}    {/*סתם דוגמאות נוספות לפי הקומפוננטות שכבר היו לנו בתכנית - לדוגמה.*/}
           {/*        <Route path={"/board"} element={<Board/>}/>*/}
           {/*    </Routes>*/}
           {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
