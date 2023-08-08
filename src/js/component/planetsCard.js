import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = (props) => {
    const { store, actions } = useContext(Context);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        actions.getIdPlanets(props.entities.uid, setPlanets(planets));

	}, []);

	return (
        
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.entities.uid}.jpg`} alt={`Image of ${props.entities.name}`}/>
                <div className="card-body">
                        <h5 className="card-title">{props.entities.name}</h5>
                    <div className="container d-flex row">
                        <div className="lh-base">
                            <p className="m-0">Population: {props.entities.population}</p>
                            <p className="m-0">Terrain: {props.entities.terrain}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <Link to={"/planetsDescription/" + props.entities.id}>
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
