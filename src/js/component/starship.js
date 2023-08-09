import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Starship = (props) => {
    const { store } = useContext(Context);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

	return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img
                        className="card-img"
                        style={{ width: "30rem" }}
                        onError={handleImageError}
                        src={imageError ? 
                            "https://static.vecteezy.com/system/resources/previews/009/007/134/original/failed-to-load-page-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" : 
                            `https://starwars-visualguide.com/assets/img/starships/${props.entities.uid}.jpg`}
                        alt={`Image of ${props.entities.name}`}
                    />
                </div>
                <div className="text-center m-auto">
                    <h5>{props.entities.properties.name}</h5>
                    <p>{props.entities.description}</p>
                </div>
            </div>
                <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-danger"><strong>name</strong></p>
                        <p className="text-danger">{props.entities.properties.name}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Model</strong></p>
                        <p className="text-danger">{props.entities.properties.model}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Starship class</strong></p>
                        <p className="text-danger">{props.entities.properties.starship_class}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Crew</strong></p>
                        <p className="text-danger">{props.entities.properties.crew}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Passengers</strong></p>
                        <p className="text-danger">{props.entities.properties.passengers}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Consumables</strong></p>
                        <p className="text-danger">{props.entities.properties.consumables}</p>
                    </div>
                </div>
      </div>
	);
};
