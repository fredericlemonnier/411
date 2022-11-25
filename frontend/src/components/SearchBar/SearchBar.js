import {useRef} from 'react';
import axios from 'axios';
import { useNavigate, redirect } from "react-router-dom";



function SearchBar() {
    const teamRef = useRef();
    const dateRef = useRef();
    

    const onSubmit = () => {

        const inputs = {
            team : teamRef.current.value,
            date : dateRef.current.value
        };
        
        const req = axios.post('http://127.0.0.1:8000/getTeamID/',inputs).then((response => {
            const breweries = response.data
            console.log(breweries)  
            // redirect('frontend/src/components/BreweryList/BreweryList.js');   
        }
        ))
    }
    
    return (
        <div> 
            {/* Add instructions for complete team name */}  
        <input
            type="text"
            id="header-search"
            placeholder="Team"
            name="team"
            ref={teamRef} 
        />
        <input
            type="date"
            id="header-search"
            placeholder="Date"
            name="date" 
            ref={dateRef}
        />
        <button onClick={onSubmit}>Search</button>
    </div>
    );
}

export default SearchBar;