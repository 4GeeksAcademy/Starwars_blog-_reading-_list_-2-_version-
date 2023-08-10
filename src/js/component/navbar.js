import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Lego_Star_Wars_42.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState('');
	const [autocompleteData, setAutocompleteData] = useState([]);
	const [showAutocomplete, setShowAutocomplete] = useState(false); // New state for showing/hiding the autocomplete dropdown

	const handleChange = (value) => {
		setInput(value);
		if (value.trim() === '') {
			setAutocompleteData([]);
			setShowAutocomplete(true); // Hide the autocomplete dropdown when input is empty
		}

		fetch(`https://www.swapi.tech/api/people?name=${value}`)
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json(); // Parse the response JSON
		})
		.then(responseAsJson => {
			console.log(responseAsJson)
			
			if (value && responseAsJson && responseAsJson.results && responseAsJson.results > 0) {
				setAutocompleteData(responseAsJson.results.filter(result => result.name.toLowerCase().includes(value.toLowerCase())).map(result => result.name));
				setShowAutocomplete(true); // Show the autocomplete dropdown when there are suggestions
			}
		})
		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	}

	const handleSelectAutocomplete = (selectedItem) => {
		setInput(selectedItem);
		setShowAutocomplete(false); // Hide the autocomplete dropdown when a suggestion is selected
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // 👈️ prevent page refresh
			// Your code to handle the "Enter" key press 
			// let's just clear the input
			setInput('');
			setShowAutocomplete(false);
		}
	}

	return (
		<div className="container-fluid navbar-light bg-light">
			<nav className="container navbar">
				<Link to="/">
					<img src={logo} style={{ width: "100px" }} alt="star wars logo" />
				</Link>
				<div className="ml-auto">
					<form className="input-group mb-3">
						<div className="input-group-prepend">
							<div>
								<span className="input-group-text" style={{ height: "1.9rem" }} id="basic-addon1"><i className="fas fa-search"></i></span>
							</div>
						</div>
						{/* Autocomplete dropdown */}
						<div>
							<input
								style={{ height: "1.9rem" }}
								type="text"
								className="form-control"
								value={input}
								onChange={(e) => handleChange(e.target.value)}
								placeholder="Search by name"
								onKeyDown={handleKeyDown}
							/>
							{showAutocomplete && autocompleteData.length > 0 && (
								<ul className="autocomplete-list">
									{autocompleteData.map((item, index) => (
										<li
											key={index}
											onClick={() => handleSelectAutocomplete(item)} // Handle selection
										>
											{item}
										</li>
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
