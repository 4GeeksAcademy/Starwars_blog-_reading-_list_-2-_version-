import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = (props) => {
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
                    `https://starwars-visualguide.com/assets/img/characters/${props.entities.uid}.jpg`}
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
                        <p className="text-danger"><strong>Birth year</strong></p>
                        <p className="text-danger">{props.entities.properties.birth_year}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Gender</strong></p>
                        <p className="text-danger">{props.entities.properties.gender}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Height</strong></p>
                        <p className="text-danger">{props.entities.properties.height}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Skin Color</strong></p>
                        <p className="text-danger">{props.entities.properties.skin_color}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Eye Color</strong></p>
                        <p className="text-danger">{props.entities.properties.eye_color}</p>
                    </div>
                </div>
      </div>
	);
};
