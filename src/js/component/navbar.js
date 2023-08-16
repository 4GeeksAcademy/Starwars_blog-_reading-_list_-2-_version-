import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Lego_Star_Wars_42.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState('');
	const [showAutocomplete, setShowAutocomplete] = useState(false); // New state for showing/hiding the autocomplete dropdown
	const [combinedAutocompleteData, setCombinedAutocompleteData] = useState([]);

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === '') {
      setCombinedAutocompleteData([]); // Clear the autocomplete data
      setShowAutocomplete(false); // Hide the autocomplete dropdown when input is empty
    }

		// Fetch characters and planets data
    	const fetchCharacters = fetch(`https://www.swapi.tech/api/people?`);
    	const fetchPlanets = fetch(`https://www.swapi.tech/api/planets?`);

		// Combine results from both fetches
		Promise.all([fetchCharacters, fetchPlanets])
		.then((responses) => Promise.all(responses.map((response) => response.json())))
		.then(([charactersData, planetsData]) => {
		  const combinedData = [
			...charactersData.results.filter((result) =>
			  result.name.toLowerCase().includes(value.toLowerCase())
			),
			...planetsData.results.filter((result) =>
			  result.name.toLowerCase().includes(value.toLowerCase())
			),
		  ];
		  setCombinedAutocompleteData(
			combinedData.map((result) => result.name)
		  );
		  setShowAutocomplete(true); // Show the autocomplete dropdown when there are suggestions
		})
		.catch((error) => {
		  console.log('Looks like there was a problem: \n', error);
		});
	};

	const selectedItemType = (selectedItem) => {
		if (selectedItem && selectedItem.toLowerCase().includes("people")) {
		  return "characters";
		} else {
		  return "planets";
		}
	  };

	const handleSelectAutocomplete = (selectedItem) => {
		setInput(selectedItem);
		setShowAutocomplete(false); // Hide the autocomplete dropdown when a suggestion is selected
		setInput('');
		setShowAutocomplete(false);
	}


	return (
		<div className="container-fluid navbar-light bg-light">
			<nav className="container navbar">
				<Link to="/">
					<img src={logo} style={{ width: "100px" }} alt="star wars logo" />
				</Link>
				<div className="d-flex flex-row">
					<form className="input-group me-3">
						<div className="input-group-prepend">
							<div>
								<span className="input-group-text" style={{ height: "2.5rem" }} id="basic-addon1"><i className="fas fa-search"></i></span>
							</div>
						</div>
						{/* Autocomplete dropdown */}
						<div>
							<input
								style={{ height: "2.5rem" }}
								type="text"
								className="form-control"
								value={input}
								onChange={(e) => handleChange(e.target.value)}
								placeholder="Search by name"
							/>
								{showAutocomplete && combinedAutocompleteData.length > 0 && (
									<ul className="autocomplete-list list-unstyled">
									{combinedAutocompleteData.map((item, index) => (
										<Link to={`/details/${selectedItemType(item)}/${index}`}>
											<li
											key={index}
											onClick={() => handleSelectAutocomplete(item)} // Handle selection
											>
											{item}
											</li>
										</Link>
									))}
								</ul>
							)}
						</div>
							</form>
							
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{(store.favorites && store.favorites.length > 0) ?
							store.favorites.map((fav, index) => (
								<li key={fav}>
									<a className="dropdown-item d-flex justify-content-between" onClick={() => actions.removeFavorites(index)}>{fav}<i className="fas fa-trash mt-1"></i></a>
								</li>
							)) : <li className="text-center">(empty)</li>
						}
						</ul>
				</div>
				</div>
			</nav>
		</div>
		
	);
	
};
