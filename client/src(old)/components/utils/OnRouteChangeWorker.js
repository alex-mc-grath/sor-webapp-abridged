import React, { useEffect, useRef } from "react";

const OnRouteChangeWorker = props => {
    const locationRef = useRef("");
    useEffect(() => {
        if (props.location.pathname !== locationRef.current) {
            locationRef.current = props.location.pathname;
            props.action();
        }
    });

    return null;
};

export default OnRouteChangeWorker;