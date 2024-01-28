import React, {useEffect, useState} from 'react';
import '../style/LoginSignUp.css';
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore';
import {db} from "../firebaseConfig";

// Login component definition
function Login(props) {

    // State variables for username and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        // Reference to the 'Auth' collection in Firestore
        const dbref = collection(db, 'Auth')
        try {
            // Query to find documents with matching username
            const emailMatch = query(dbref, where('Name', '==', username))
            const passwordMatch = query(dbref, where('Password', '==', password))
            const emailSnapshot = await getDocs(emailMatch)

            // Query to find documents with matching password
            const emailArray = emailSnapshot.docs.map((doc) => doc.data())
            const passwordSnapshot = await getDocs(passwordMatch)
            const passwordArray = passwordSnapshot.docs.map((doc) => doc.data())

            // Checking if both username and password are valid
            if (emailArray.length > 0 && passwordArray.length > 0) {
                alert('Login successfully')
            } else {
                alert('Check your email and password, or create an account')
            }
        } catch (error) {
            alert(error)
        }
    }

    // useEffect to set the document title when component mounts
    useEffect(() => {

        document.title = 'MOSH - Login';
    }, []);

    // Rendering the login form
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
                    <h2>Sign In</h2>

                    <div className="form">

                        <div className="inputBox">
                            <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} required/>
                            <i>Username</i>
                        </div>

                        <div className="inputBox">
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}
                                   required/> <i>Password</i>
                        </div>

                        <div className="links"><a href="#">Forgot Password</a> <a href="./signup">Signup</a>
                        </div>

                        <div className="inputBox">
                            <button type="submit" className="submitButton" onClick={login}>Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

// Exporting the Login component
export default Login;