import "./Signup.css";
import {useState} from "react";
import {validateName} from "./helpers";

export default function Signup() {

    const [validFirstName, setValidFirstName] = useState(true);
    const [validLastName, setValidLastName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    const handleChange = (event) =>{
        console.log("handling the change")
        if (event.target.id === "Signup-Form-FirstName"){
            setValidFirstName(validateName(event.target.value))
        }else if(event.target.id === "Signup-Form-LastName"){
            setValidLastName(validateName(event.target.value))
        }else if(event.target.id === "Signup-Form-Email"){
            setValidEmail(validateEmail(event.target.value))
        }
    }

    return (
        <div className="Signup">
            <div className="Signup-Box">
                <div className="Signup-Box-Title">
                    Sign Up
                </div>
                <div className="Signup-Box-Form">
                    <div>
                        <div>
                            <span style={validFirstName? {display: "none"}: {display: "inline-block"}}>
                                Invalid First Name
                            </span>
                            <span style={validLastName? {display: "none"}: {display: "inline-block"}}>
                                Invalid Last Name
                            </span>
                        </div>
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="First Name"
                            className="Signup-Box-Form-NameInput"
                            id="Signup-Form-FirstName"
                            style={validFirstName?{backgroundColor:"#640aff"}: {backgroundColor: "#FF495C"}}
                        ></input>
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Last Name"
                            className="Signup-Box-Form-NameInput"
                            id="Signup-Form-LastName"
                            style={validLastName?{backgroundColor:"#640aff"}: {backgroundColor: "#FF495C"}}
                        ></input>
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="E-Mail"
                        className="Signup-Box-Form-Input"
                        id="Signup-Form-Email"
                        style={validEmail?{backgroundColor:"#640aff"}: {backgroundColor: "#FF495C"}}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        className="Signup-Box-Form-Input"
                        id="Signup-Form-Password"
                    ></input>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="Signup-Box-Form-Input"
                        id="Signup-Form-Confirm"
                    ></input>
                    <button 
                        className="Signup-Box-Form-Submit"
                    >Sign Up</button>
                </div>
            </div>
        </div>
    )
}