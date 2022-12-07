import {useState} from 'react';
import axios from 'axios';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
    const [team, setTeam] = useState("");
    const [exactDate, setExactDate] = useState("");
    // const teamRef = useRef("");
    // const dateRef = useRef("");
    const [searchClicked, setSearchClicked] = useState(false);
    const [breweries, setData] = useState([]);
    const [team1Logo, setLogo1] = useState("");
    const [team2Logo, setLogo2] = useState("");
    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAdress] = useState("");
    const [venueCity, setVenueCity] = useState("");
    const [hteam, setHteam] = useState("");
    const [ateam, setAteam] = useState("");
    const [date, setDate] = useState("");
    

    const onSubmit = async () => {
        setSearchClicked(!searchClicked);

        const inputs = {
            team : team,
            date : exactDate
        };  
        
        await axios.post('http://127.0.0.1:8000/getBreweries/',inputs).then((response => {
            const brews = response.data['breweries']
            const logo1 = response.data['team1_logo']
            const logo2 = response.data['team2_logo']
            const vName = response.data['venue_name']
            const vAddress = response.data['venue_address']
            const vCity = response.data['venue_city']
            const hteam = response.data['team1_name']
            const ateam = response.data['team2_name']
            const date = response.data['game_time']

            setData(brews)
            setLogo1(logo1)
            setLogo2(logo2)
            setVenueName(vName)
            setVenueAdress(vAddress)
            setVenueCity(vCity)
            setAteam(ateam)
            setHteam(hteam)
            setDate(date)

            console.log(response.data)
        }
        ))
    }
    
    return (
        <div>
        {searchClicked ?
            //  {breweries.map()}
            <>
            <div className='Game'>
                <div className='img_row'>
                    <div className='img_col'>
                        <img src={team1Logo}/>
                        {/* Add team name */}
                        <div className='hteam'>{hteam}</div>
                    </div>
                    <div className='img_col'>
                        <h1>VS</h1>
                    </div>
                    <div className='img_col'>
                        <img src={team2Logo}/>
                        {/* Add team name */}
                        <div className='hteam'>{ateam}</div>
                    </div>
                </div>
                
                
            </div>
            <div>
                <div>Match date: {date}</div>
                {/* Venue info */}
                <div className='stadium'>Stadium name: {venueName}</div>
                <div className='stadium'>Stadium address: {venueAddress}</div>
                <div className='stadium'>Stadium located city: {venueCity}</div>
                {/* Game Time */}
                
            </div>
            <Link to="/details" state= {breweries} className='breweries'>breweries near the stadium </Link>
            {/* {breweries.map(
                (brewery => <div className="Brewery List">
                  
                    <p className='brewery'> 
            <div className='name'>Brewery name: {brewery.name}</div>
            <div>street address: {brewery.street}</div>
           
            <div>phone number: {brewery.phone}</div>
            <a href={brewery.website_url}>Check brewery detail through clicking this link!</a>
            
            </p>
                    
                    </div>))} */}
            </>
            :
            <>
            <h1 className='title'>Find Breweries!</h1>
            <Card>
            <input 
            
            type="text"
            id="header-search"
            placeholder="Team"
            name="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}       
        />
        <input
           
            type="date"
            id="header-search"
            placeholder="Date"
            name="date" 
            value={exactDate}
            onChange={(e) => setExactDate(e.target.value)}
        />
        <Button onClick={onSubmit}>Search</Button>
        </Card>
        </>
            
            }
    </div>
    );
}

export default SearchBar;