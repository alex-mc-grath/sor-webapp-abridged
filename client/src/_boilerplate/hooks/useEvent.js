import { useEffect } from "react";

export const useEvent = (object, event, callback) => {
    useEffect(() =>{
        object.addEventListener(event, callback);
        return () => object.removeEventListener(event, callback);
    }, []);
};