
import React from 'react';

import './Boton.css';

import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    let history = useHistory();

    const llevame = () => {
        history.push('/profile');
    }

    return(
        <div className="boton" onClick={()=>llevame()}>Go!</div>
    )
}

export default Boton;