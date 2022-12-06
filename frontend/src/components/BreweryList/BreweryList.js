
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
      <h1>Top 5 closest breweries near the match's stadium!</h1>
       {data.map(
                (brewery => <div className="Brewery List">
                  
                    <p className='brewery'> 
            <div className='name'>Brewery name: {brewery.name}</div>
            <div>street address: {brewery.address}</div>
            <div>city: {brewery.city}</div>
            <div>phone number: {brewery.phone}</div>
            <div>ratings: {brewery.rating}</div>
            <a href={brewery.url}>Check brewery detail through clicking this link!</a>
            
            </p>
                    
                    </div>))}
    </div>
  )
}

export default BreweryList;