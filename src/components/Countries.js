import React, {useState, useEffect} from 'react';
import axios from "axios"; //used to fetch data from API also used on view.js
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]); //first hook
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ['Africa', 'America', 'Asia', 'Europe', "Oceania"];


    useEffect(()=>{
        if(playOnce){
           axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag').then((res)=> setData(res.data)); //take the data from api. No needed to transform in JSOn with axios 
           setPlayOnce(false);
        }
       
        const sortedCountry = ()=>{
            const countryObj = Object.keys(data).map((i)=> data[i]);
            const sortedArray = countryObj.sort((a, b)=>{
                return b.population - a.population
            })
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }
        sortedCountry();
    }, [data, rangeValue, playOnce]);

    



    return (
        <div className="countries">
        <div className="sort-container">
            <input type="range" name="range" id="range" min="1" max="250" value={rangeValue} 
                onChange={(e)=>setRangeValue(e.target.value)}
            />
            <ul>
                {radios.map((radio)=>{
                    return (
                        <li key={radio}>
                            <input type="radio" value={radio} id={radio}
                                checked={radio === selectedRadio} onChange={(e)=> setSelectedRadio(e.target.value)}
                            />
                            <label htmlFor="radio">{radio}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="cancel">
        {selectedRadio && <h5 onClick={()=>setSelectedRadio("")}>Cancel search</h5>}
            
        </div>
            <ul className="countries-list">
                {sortedData.filter((country)=> country.region.includes(selectedRadio)).map((country)=>(
                    
                    <Card country={country} key={country.name}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;