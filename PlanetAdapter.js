class PlanetAdapter {
	static getPlanets(){
		return fetch("http://localhost:3000/planets")
		.then(res => res.json())
	}

	static deletePlanet(id){
		return fetch(`http://localhost:3000/planets/${id}`, {method: "DELETE"})
			.then(res => res.json())
	}
}


