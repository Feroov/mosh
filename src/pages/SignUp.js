import React, {useEffect, useState} from 'react';
import '../style/LoginSignUp.css';
import {Link} from "react-router-dom";
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore';
import {db} from "../firebaseConfig";

// Signup component definition
function SignUp(props) {
    // State variables for user details
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Firestore collection reference for user authentication
    const dbref = collection(db, "Auth")

    // Function to handle the signup process
    const signup = async () => {
        // Query to check if the provided email is already in use
        const matchEmail = query(dbref, where('Email', '==', email))
        try {
            const snapshot = await getDocs(matchEmail)
            const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

            // Checking if the email is already registered
            if (emailMatchingArray.length > 0) {
                alert("This email address is already in use!")
            } else {
                // Adding user details to the Firestore collection
                await addDoc(dbref, {Name: name, Email: email, Password: password})
                alert("Signup Successful")
            }
        } catch (error) {
            alert(error)
        }
    }

    // useEffect to set the document title when component mounts
    useEffect(() => {

        document.title = 'MOSH - Sign Up';
    }, []);

    // Rendering the signup form
    return (

        <section>

            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span>


            <div className="signin">

                <div className="content">
                    <img src="/assets/images/mosh.png" alt="Mosh Logo" className="mosh-logo"/>
                    <h2>Sign Up</h2>

                    <div className="form">

                        <div className="inputBox">
                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} required/>
                            <i>E-Mail</i>
                        </div>

                        <div className="inputBox">
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} required/>
                            <i>Username</i>
                        </div>

                        <div className="inputBox">
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}
                                   required/> <i>Password</i>
                        </div>

                        <div className="links">
                            <p className="login-text">Already a member?
                                <Link to="/"><p className="login-text"
                                                style={{color: "yellow", marginLeft: "0.4em"}}>Login</p></Link></p>
                        </div>

                        <div className="inputBox">
                            <button type="submit" className="submitButton" onClick={signup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Exporting the Login component
export default SignUp;