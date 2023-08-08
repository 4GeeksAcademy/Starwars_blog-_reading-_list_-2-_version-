import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetsDescription = () => {
    const { actions } = useContext(Context);
    const { key, name, description, climate, population, orbital_period,  rotation_period, diameter} = useParams();
    const [planet, setPlanet] = useState({});
    
    useEffect(() => {
        actions.getIdPlanets(key, setPlanet(planet));

	}, []);

	return (
        <div className="container">
            <div class="d-flex flex-row">
                <img class="card-img" src={`https://starwars-visualguide.com/assets/img/planets/${key}.jpg`} alt={`Image of ${name}`}/>
                <div>
                    <h5 class="card-title text-center">{name}</h5>
                    <p class="card-text text-center">{description}</p>
                </div>
            </div>
                <div class="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-danger"><strong>name</strong></p>
                        <p className="text-danger">{name}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Climate</strong></p>
                        <p className="text-danger">{climate}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Population</strong></p>
                        <p className="text-danger">{population}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Orbital Period</strong></p>
                        <p className="text-danger">{orbital_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Rotation Period</strong></p>
                        <p className="text-danger">{rotation_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Diameter</strong></p>
                        <p className="text-danger">{diameter}</p>
                    </div>
                </div>
      </div>
	);
};
