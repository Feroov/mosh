import React, { useEffect, useState } from 'react';
import '../style/Loader.css'; // Create a new CSS file for loader styles

function Loader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2700);

        return () => clearTimeout(timer);
    }, []);

    return visible ? (
        <div className="loader-background">
            <img src="/assets/images/mosh.png" alt="Mosh Logo" className="loader-logo" />
        </div>
    ) : null;
}

export default Loader;
