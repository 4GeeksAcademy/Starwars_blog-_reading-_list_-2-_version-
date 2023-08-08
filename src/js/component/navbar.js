import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Lego_Star_Wars_42.png";
/*for the autocomplete
let data = require("./Mock_DATA.json");*/

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	/*const [value, setValue] = useState('');
	

	//function to get the input value and put inside the state
	const onChange = (e) => {
		setValue(e.target.value);
	}

	// Get the value of a input when press the key Enter
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			setValue(value.concat(value)) 
			
		// our api to fetch the search result
		
		*/

	
	return (
		<div className="container-fluid navbar-light bg-light">
			<nav className="container navbar">
				<Link to="/">
						<img src={logo} style={{width: "100px"}} alt="star wars logo" />
				</Link>
				<div className="ml-auto">
					{/*search bar with autocomplete*/}
					<form className="form-inline mb-3">
						<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text" style={{height: "1.9rem"}} id="basic-addon1"><i className="fas fa-search"></i></span>
						</div>
						{/*<input style={{height: "1.9rem"}} type="text" value={value} onChange={onChange} onKeyDown={handleKeyDown} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"
						/>
						<div className="dropdown">
							{data.map((item) => (
								<div className="dropdown-row">{item}</div>
							))}
							</div>*/}
						</div>
					</form>
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{(store.favorites && store.favorites.length > 0) ?
							store.favorites.map((fav, index) => (
								<li className="d-flex justify-content-between" key={fav}>
									<a className="dropdown-item" onClick={() => actions.removeFavorites(index)}>{fav}<i className="fas fa-trash ms-4"></i></a>
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
