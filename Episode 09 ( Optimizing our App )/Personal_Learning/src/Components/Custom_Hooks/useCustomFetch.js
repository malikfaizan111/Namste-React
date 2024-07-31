// Custom hooks allow you to reuse stateful logic across components without repeating code.
// A custom hook is a JavaScript function that can call other hooks. By convention, its name starts with use.

import { useEffect, useState } from "react";

const useCustomFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            setData(data);
            setLoading(false);
        })
    },[url]);

    return {data, loading};
}

export default useCustomFetch;