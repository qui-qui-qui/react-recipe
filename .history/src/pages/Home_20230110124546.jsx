import { useState, useEffect } from "react";
import { getAllCategories } from "../api";

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => )
    }, [])
    
    return <h1>Hello from home</h1>
}

export {Home};