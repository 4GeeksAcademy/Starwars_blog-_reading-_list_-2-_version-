import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharactersCard = (props) => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        actions.getIdCharacters(props.id, setCharacter);
        console.log(actions.getIdCharacters(props.id, setCharacter)) //undefined
    }, []);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/characters/${props.entities.uid}.jpg`}
                alt={`Image of ${props.entities.name}`}
            />
            <div className="card-body ">
                <h5 className="card-title">{props.entities.name}</h5>
                <div className="container d-flex row">
                    <div>
                        <p className="m-0">Gender: {props.entities.gender}</p>
                        <p className="m-0">Hair Color: {props.entities.hair_color}</p>
                        <p className="m-0">Eye Color: {props.entities.eye_color}</p>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to={"/charactersDescription/" + props.entities.id}>
                            <button
                                className="btn btn-outline-primary"
                                data-toggle="button"
                                aria-pressed="false"
                            >
                                Learn more!
                            </button>
                        </Link>
                        <button
                            className="btn btn-outline-warning "
                            data-toggle="button"
                            aria-pressed="false"
                            onClick={() => {
                                actions.addFavorites(props.entities.name);
                            }}
                        >
                            <i
                                className={`far fa-heart ${
                                    store.favorites.includes(props.entities.name)
                                        ? "fas fa-heart"
                                        : ""
                                }`}
                            ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};