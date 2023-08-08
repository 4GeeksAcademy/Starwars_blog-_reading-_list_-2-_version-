import React, { useContext } from "react";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { VehiclesCard } from "../component/vehiclesCard";
import { Context } from "../store/appContext";

export const Main = () => {
    const { store, actions } = useContext(Context);
    console.log(store.characters)
    console.log(store.planets)
    console.log(store.vehicles)

    return (
        <div className="container">
            <div className="my-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
                <h1 className="text-danger mb-4">Vehicles</h1>
                <div className="overflow-auto row flex-nowrap">
                    {store.vehicles && store.vehicles.length > 0
                        ? store.vehicles.map((vehicle) => (
                              <VehiclesCard
                                  key={vehicle.uid}
                                  entities={vehicle}
                                  entity="vehicles"
                                  addFavorites={actions.addFavorites}
                              />
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};