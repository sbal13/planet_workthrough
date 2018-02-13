document.addEventListener("DOMContentLoaded", function() {
	const planetList = document.querySelector("#planet-list")
	const form = document.querySelector("#new-planet-form")
	form.addEventListener("submit", createPlanet)
	// const planetClimate = document.querySelector("#planet-climate")
	// const planetSize = document.querySelector("#planet-size")
	// const planetDescription = document.querySelector("#planet-description")

	function getPlanets(){
		PlanetAdapter.getPlanets()
		.then(planetArray => {
			planetArray.forEach(planet => {
				renderPlanet(planet)
			})
		})

	}

	function renderPlanet(planet){
		let planetDiv = document.createElement("div")
				let planetUl = document.createElement("ul")
				let nameLi = document.createElement("li")
				let climateLi = document.createElement("li")
				let sizeLi = document.createElement("li")
				let descriptionLi = document.createElement("li")
				
				nameLi.innerText = planet.name
				nameLi.id = `planet-name`
				climateLi.innerText = planet.climate
				sizeLi.innerText = planet.size
				descriptionLi.innerText = planet.description

				planetUl.append(nameLi, climateLi, sizeLi, descriptionLi)

				let deleteButton = document.createElement("button")
				deleteButton.innerText = "Delete"

				addDeleteListener(deleteButton, planet.id, planetDiv)

				planetDiv.append(planetUl)
				planetDiv.append(deleteButton)
				planetList.append(planetDiv)
	}

	function addDeleteListener(button, id, div){
		button.addEventListener("click", beef)
	}

	function beef(event){
		console.log("beefy")
		// PlanetAdapter.deletePlanet(id)
		// 	.then(json => {
		// 		div.remove()
		// 	})
	}

	function createPlanet(e){
		e.preventDefault()
		let inputPlanetName = document.querySelector('#input-planet-name').value
		let inputPlanetSize = document.querySelector('#input-planet-size').value
		let inputPlanetClimate = document.querySelector('#input-planet-climate').value
		let inputPlanetDescription  = document.querySelector('#input-planet-description').value
	}

	getPlanets()
})