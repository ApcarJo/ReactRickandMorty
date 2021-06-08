
import React, {useEffect,useState} from 'react';

import './Detail.css';

const Detail = () => {

     //Hooks
     const [detalle,setDetalle] = useState([]);

    //Este useffect se ejecuta después de montar el componente
    useEffect(()=>{
             obtenDatos();
    },[]);

    useEffect(()=>{
        console.log(detalle);
    });

    const obtenDatos = () => {
        setDetalle(JSON.parse(localStorage.getItem('datosPersonaje')));
    }

    if (detalle?.name){
        
        return(
        <div className="tarjeta">
            <p>{detalle.name}</p>
            <p>{detalle.species}</p>
            <p>{detalle.status}</p>
            <p>{detalle.gender}</p>
            <img src={detalle.image} alt="foto"/>
        </div>
        )
    }else{

    }
    return (
        <div> soy detail </div>
    )
}

export default Detail;