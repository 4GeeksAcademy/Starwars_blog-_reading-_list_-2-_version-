import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehiclesCard = (props) => {
    const { store, actions } = useContext(Context);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        actions.getIdVehicles(props.entities.uid, setVehicles(vehicles));

	}, []);

	return (
        
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${props.entities.uid}.jpg`} alt={`Image of ${props.entities.name}`}/>
                <div className="card-body ">
                        <h5 className="card-title">{props.entities.name}</h5>
                    <div className="container">
                        <div className="lh-base">
                            <p className="m-0">Model: {props.entities.model}</p>
                            <p className="m-0">Manufacturer: {props.entities.manufacturer}</p>
                        </div>
                        <div  className="d-flex justify-content-between mt-5">
                            <Link to={"/vehiclesDescription/" + props.entities.id}>
                                <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" >Learn more!</button>
                            </Link>
                                <button className="btn btn-outline-warning " data-toggle="button" aria-pressed="false" onClick={() => { actions.addFavorites(props.entities.name) }}>
                                <i className={`far fa-heart ${store.favorites.includes(props.entities.name) ? 'fas fa-heart' : ''}`} ></i></button>
                        </div>                    
                    </div>
                </div>
            </div>
	);
};
