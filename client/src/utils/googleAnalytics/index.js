import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const MyFunctionalComponent = () => {
    useEffect(() => {
        // Initialize Google Analytics
        ReactGA.initialize('YOUR_TRACKING_ID');

        // Track page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const handleClick = () => {
        // Track event
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Clicked button on homepage'
        });
    };

    return (
        <button onClick={handleClick}>Click me</button>
    );
};