import {useRef} from 'react';
import axios from 'axios';


const apiKey = '99STUUcDXZs8D6AMKU0RUsqENtx6z5n6UJ1oqm8tB3Mfv2gLLmIH20LHig8X'
const appKey = '5ecde912845e9b21bba7160f8dbd0388'

function SearchBar() {
    const homeRef = useRef();
    const awayRef = useRef();

    const onSubmit = () => {
        
        const req1 = axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/teams/search/${homeRef.current.value}?api_token=${apiKey}`).then((response => {
            const homeID = response.data.data[0].id
            getAwayID(homeID)
        }
        ))
    }
    
    const getAwayID = (homeID) => {
            const req2 = axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/teams/search/${awayRef.current.value}?api_token=${apiKey}`).then((response => {
            const awayID = response.data.data[0].id
            getVenueID(homeID,awayID)
        }
        ))
    }

    const getVenueID = (homeID,awayID) => {
        const req3 = axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/fixtures/head-to-head/${homeID}/${awayID}?api_token=${apiKey}`).then((response => {
            const venueID = response.data.data[0].venue_id
            getCoordinates(venueID)
        }))
    }

    const getCoordinates = (venueID) => {
        const req4 = axios.get(`https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/venues/${venueID}?api_token=${apiKey}`).then((response => {
            const latitude = response.data.data.latitude
            const longitude = response.data.data.longitude
            getBreweries(latitude,longitude)
        }))
    }

    const getBreweries = (latitude,longitude) => {
        const req5 = axios.get(`https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}&per_page=10`).then((response => {
            const breweries = response.data
            console.log(breweries)
        }))
    }
    
    return (
        <div> 
            {/* Add instructions for complete team name */}       
        <input
            type="text"
            id="header-search"
            placeholder="Home"
            name="home"
            ref={homeRef} 
        />
        <input
            type="text"
            id="header-search"
            placeholder="Away"
            name="away" 
            ref={awayRef}
        />
        <button onClick={ () => onSubmit()}>Search</button>
    </div>
    );
}

export default SearchBar;