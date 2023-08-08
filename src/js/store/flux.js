const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			idCharacter: [],
			planets: [],
			idPlanet: [],
			vehicles: [],
			idVehicle: [], 
			favorites: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			getInitialCharacters: () => {
				fetch('https://www.swapi.tech/api/people')
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ characters: response.results });
				})
				.catch(error => console.error(error));
			},
			getIdCharacters: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ idCharacter: response.results.properties });
				})
				.catch(error => console.error(error));
			},
			getInitialPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ planets: response.results });
				})
				.catch(error => console.error(error));
			},
			getIdPlanets: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ idPlanet: response.results.properties });
				})
				.catch(error => console.error(error));
			},
			getInitialVehicles: () => {
				fetch('https://www.swapi.tech/api/starships')
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ vehicles: response.results });
				})
				.catch(error => console.error(error));
			},
			getIdVehicles: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => {
					setStore({ idVehicle: response.results.properties });
				})
				.catch(error => console.error(error));
			},
			addFavorites: (newFavorite) => {
				const store = getStore();
				const favorite = store.favorites.concat(newFavorite);
				setStore({ favorites: favorite });
			},
			removeFavorites: (index) => {
				const store = getStore();
				const favorite = store.favorites.filter((c, i) => {
					return index !== i
				});
				setStore({ favorites: favorite });
			}
		}
	};
};

export default getState;