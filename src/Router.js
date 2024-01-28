import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Loader from './pages/Loader';

function Router(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loaderShown = sessionStorage.getItem('loaderShown');

        if (loaderShown) {
            setLoading(false);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('loaderShown', 'true');
            }, 2700);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/router" element={<Navigate to="/"/>}/>
                </Routes>
            )}
        </>
    );
}

export default Router;