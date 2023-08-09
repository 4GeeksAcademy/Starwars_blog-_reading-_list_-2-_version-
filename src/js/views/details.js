import React, { useState, useContext, useEffect } from "react";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Starship } from "../component/starship";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState();
    const [planet, setPlanet] = useState();
    const [starship, setStarship] = useState();

   useEffect(() => {
    if (params.uid && params.entities === "characters") {
        actions.getCharactersById(params.uid, setCharacter);
    } }, []);

    useEffect(() => {
    if (params.uid && params.entities === "planets") {
        actions.getPlanetsById(params.uid, setPlanet);
    }}, []);

    useEffect(() => {
        if (params.uid && params.entities === "starships") {
        actions.getStarshipsById(params.uid, setStarship);
    }
    }, []);


    return (
        <div className="container">
            <div>
                {character ? 
                        <Characters
                            key={character.uid}
                            entities={character}
                            entity="characters"
                            
                        />
                    : 
                    ""
                }
            </div>
            <div>
                {planet ?
                        <Planets
                            key={planet.uid}
                            entities={planet}
                            entity="planets"
                        />
                    : ""}
            </div>
            <div>
                {starship ?
                        <Starship
                            key={starship.uid}
                            entities={starship}
                            entity="starships"
                        />
                    : ""}
            </div>
        </div>
    );
};