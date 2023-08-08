import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const VehiclesDescription = () => {
    const { store, actions } = useContext(Context);
    const { key, name, description, model, starship_class, crew, passengers, consumables} = useParams();
    const [vehicles, setVehicles] = useState({});

    useEffect(() => {
        actions.getIdVehicles(key, setVehicles(vehicles));

	}, []);

	return (
        <div className="container">
            <div class="d-flex flex-row">
                <img class="card-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${key}.jpg`}   alt={`Image of ${name}`}/>
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
                        <p className="text-danger"><strong>Model</strong></p>
                        <p className="text-danger">{model}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Starship class</strong></p>
                        <p className="text-danger">{starship_class}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Crew</strong></p>
                        <p className="text-danger">{crew}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Passengers</strong></p>
                        <p className="text-danger">{passengers}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Consumables</strong></p>
                        <p className="text-danger">{consumables}</p>
                    </div>
                </div>
      </div>
	);
};
