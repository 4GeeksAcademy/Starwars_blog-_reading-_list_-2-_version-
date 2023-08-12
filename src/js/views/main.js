import React, { useState, useContext, useEffect} from "react";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarshipsCard } from "../component/starshipsCard";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Main = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState();
    const [planet, setPlanet] = useState();
    const [starship, setStarship] = useState();

   useEffect(() => {
    if (params.uid && params.entities === "characters") {
        actions.getCharactersById(params.uid);
    } }, []);

    useEffect(() => {
    if (params.uid && params.entities === "planets") {
        actions.getPlanetsById(params.uid);
    }}, []);

    useEffect(() => {
        if (params.uid && params.entities === "starships") {
        actions.getStarshipsById(params.uid);
    }
    }, []);
    
    return (
        <div className="container">
            <div>
                <h1 className="text-danger mb-4">Characters</h1>
                <div className="overflow-auto row flex-nowrap">
                {store.characters && store.characters.length > 0 ? 
                    store.characters.map((character) => (
                            <CharactersCard
                                key={character.uid}
                                entities={character}
                                entity="characters"
                                addFavorites={actions.addFavorites}
                            />
                        ))
                : 
                    ""
            }
               </div>
            </div>
            <div>
                <h1 className="text-danger mb-4">Planets</h1>
                <div className="overflow-auto row flex-nowrap">
                    {store.planets && store.planets.length > 0
                        ? store.planets.map((planet) => (
                              <PlanetsCard
                                key={planet.uid}
                                entities={planet}
                                entity="planets"
                                addFavorites={actions.addFavorites}
                              />
                          ))
                        : ""}
                </div>
            </div>
            <div>
                <h1 className="text-danger mb-4">Vehicles</h1>
                <div className="overflow-auto row flex-nowrap">
                    {store.starships && store.starships.length > 0
                        ? store.starships.map((vehicle) => (
                              <StarshipsCard 
                                  key={vehicle.uid}
                                  entities={vehicle}
                                  entity="starships"
                                  addFavorites={actions.addFavorites}
                              />
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};