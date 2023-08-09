import React, { useContext } from "react";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarshipsCard } from "../component/starshipsCard";
import { Context } from "../store/appContext";

export const Main = () => {
    const { store, actions } = useContext(Context);
    
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