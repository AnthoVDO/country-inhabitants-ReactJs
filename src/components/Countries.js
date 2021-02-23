import React, {useState, useEffect} from 'react';
import axios from "axios"; //used to fetch data from API also used on view.js

const Countries = () => {
    const [data, setData] = useState([]); //first hook

    useEffect(()=>{
       axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag').then((res)=> setData(res.data)); //take the data from api. No needed to transform in JSOn with axios
 
    }, []);

    



    return (
        <div>
            
        </div>
    );
};

export default Countries;