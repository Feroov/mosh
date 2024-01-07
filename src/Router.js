import React from 'react';
import {Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
function Router(props) {
    return (
        <Routes>
            <Route path='/' element={<SignUp/>}></Route>
        </Routes>
    );
}

export default Router;