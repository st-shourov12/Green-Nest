import axios from "axios";
import React, { useEffect } from 'react';
import { useState } from "react";

const usePlant = () => {
    const [plants, setPlants] = useState([]) ;
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);


    useEffect(()=>{
        axios('/plants.json')
        .then(r => setPlants(r.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))

    }, [])

    return (
        {plants, error, loading , setPlants}
    );
};

export default usePlant;

// https://github.com/programming-hero-web-course2/b12-a9-firesheild-st-shourov12