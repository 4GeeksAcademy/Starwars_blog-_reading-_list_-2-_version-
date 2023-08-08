import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersDescription = () => {
    const { actions } = useContext(Context);
    const { key, name, description, birth_year, gender, height, skin_color, eye_color } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
		actions.getIdCharacters(key, setCharacter(character));
	}, []);

	return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img className="card-img" src={"https://starwars-visualguide.com/assets/img/characters/"  + key + ".jpg"} alt={`Image of ${name}`}/>
                </div>
                <div>
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">{description}</p>
                </div>
            </div>
                <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-danger"><strong>name</strong></p>
                        <p className="text-danger">{name}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Birth year</strong></p>
                        <p className="text-danger">{birth_year}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Gender</strong></p>
                        <p className="text-danger">{gender}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Height</strong></p>
                        <p className="text-danger">{height}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Skin Color</strong></p>
                        <p className="text-danger">{skin_color}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Eye Color</strong></p>
                        <p className="text-danger">{eye_color}</p>
                    </div>
                </div>
      </div>
	);
};
