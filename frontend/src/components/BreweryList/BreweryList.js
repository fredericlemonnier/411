
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation, Link } from 'react-router-dom';
import './BreweryList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const BreweryList = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className='background'>
      <>
            <br/>
            </> 
      <div>Top 5 closest breweries near the match's stadium!</div>
      <>
            <br/>
            </> 
       {data.map(
                (brewery => <div className="BreweryList">
                  
                    <Card className='brewery'> 
            <div className='name'>Brewery name: {brewery.name}</div>
            <div className='address'>street address: {brewery.address}</div>
            <div className='city'>city: {brewery.city}</div>
            <div className='number'>phone number: {brewery.phone}</div>
            <div className='rating'>rating: {brewery.rating}</div>
            <a href={brewery.url} className='url'>Check brewery detail through clicking this link!</a>
            
            </Card>
            <>
            <br/>
            </>              
                    </div>))}
    </div>
  )
}

export default BreweryList;