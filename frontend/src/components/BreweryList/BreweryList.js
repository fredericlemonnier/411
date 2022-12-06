
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation, Link } from 'react-router-dom';
import './BreweryList.css';

const BreweryList = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className='background'>
      <h1>Top 5 closest breweries in the match's city</h1>
       {data.map(
                (brewery => <div className="Brewery List">
                  
                    <p className='brewery'> 
            <div className='name'>Brewery name: {brewery.name}</div>
            <div>street address: {brewery.street}</div>
            <div>phone number: {brewery.phone}</div>
            <a href={brewery.website_url}>Check brewery detail through clicking this link!</a>
            
            </p>
                    
                    </div>))}
    </div>
  )
}

export default BreweryList;