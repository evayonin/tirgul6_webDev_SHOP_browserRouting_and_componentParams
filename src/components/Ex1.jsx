import {useState} from "react";

function Ex1() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div>
            <div>
                <input
                    type={"text"}
                    placeholder={"username"}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <br/>
                {
                    username.length<4 &&
                    <label style={{color: "red"}}>
                        you must ...4 letters
                    </label>
                }
            </div>
            <div>
                <input
                    type={"password"}
                    placeholder={"password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <br/>
            <label style={{color: password.length<5?"red":"green"}}>
                {password.length<5? "week password":"strong password"}</label>
        </div>
    );
}

export default Ex1;
