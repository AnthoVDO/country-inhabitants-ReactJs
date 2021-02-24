import React from 'react';

const Card = (props) => {

const {country} = props; //this is destructuring. To avoid writting country = props.country

const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); //used to make the population number by adding a space each 3 digit
}
    return (

        
        <li className="card">
            <img src={country.flag} alt={country.name+" flag"}/>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>Capital:{country.capital}</li>
                    <li>Pop.: {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;