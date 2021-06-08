
import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './Profile.css';

const Profile = () => {

    let history = useHistory();

    //Hooks
    const [characters,setCharacters] = useState([]);

    // Equivalente a componenteDidMount en componentes de Clase
    useEffect(()=>{
        setTimeout(()=>{
            getCharacters();
        }, 2000);
        
    }, []);
    
    // Equivalente a componentDidUpdate en componenes de Clase
    useEffect(()=> {
        // console.log("Bingo!!!", characters);

    });

    const clickHandler = (person) => {
        //Guardamos en localStorage

        localStorage.setItem('datosPersonaje', JSON.stringify(person));
        history.push('/detail');

    }

    const getCharacters = async () => {
        try{
            let res = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(res.data.results);
            
        }catch (err){
            console.log({message: err.message});
        }
    }

    if (characters[0]?.id){

        return(<div>{characters.map((person, index)=>(
        <div className="card" onClick={()=>clickHandler(person)}>
            <p>{person.name}</p><img src={person.image} alt="movida" key={index}/>
        </div>))}
        </div>)

    }else {
    return(
        <div>Soy profile</div>
    )
    }
}

export default Profile;