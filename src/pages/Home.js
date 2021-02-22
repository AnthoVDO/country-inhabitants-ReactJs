//import React from 'react'  => not mandatory since the new release

import Navigation from "../components/Navigation";

const Home = ()=>{
    return (
        <div className="home">
            <Navigation/>
            <h1>Home</h1>
        </div>
    );
};

export default Home