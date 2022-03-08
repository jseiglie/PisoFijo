import exampleRequestIdealista from "./exampleRequestIdealista.js"
import credentials from "./credentialsAPIIdealista.js";

const urlRequestTokenAPI = "https://api.idealista.com/oauth/token?grant_type=client_credentials&scope=read";
const urlBaseAPI = "https://api.idealista.com/3.5/"; /* {country} + "/search"*/

const getState = ({ getStore, getActions, setStore }) => {

	return {
			store: {
				country: "es", //(string) - values: es, it, pt (requiered)
				filterUrl: "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000",
				accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0NjQyNzMyMywiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiZmQzZmM1NGYtYmFjMy00OThhLTg0NmEtNmU5NzZhM2Y1ZGE0IiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.5xgoYhdSRE7AVkoQu93BZTJYdkudftos3qz0QxA4dZE",
					//Example: https://api.idealista.com/3/es/search?locale=es&maxItems=20&numPage=1&operation=sale&
					//order=publicationDate&propertyType=garages&sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&
					//locationId=0-EU-ES-28
				distanceRequest: 15000,
				centerRequest: {lat:40.430, lng:-3.702},
				propertiesSearch: exampleRequestIdealista.elementList,
				selected: [],
				listFavorites: []
			},
			actions: {

			addElementListArr: (inputValue) => {
				setStore({list:[...getStore().list, inputValue]})
			},

			getSelectedProperty: (selectedProperty) =>{
				setStore({selected: selectedProperty})
			},

			getFilterUrl: url =>{
				setStore({filterUrl: url})
			},

			getAccessToken: () => {
				console.log(" aqui urlRequestTokenAPI",urlRequestTokenAPI)
				fetch(urlRequestTokenAPI,{
					method: "POST",
					mode:"no-cors",
					headers:{
						"Content-Type": "application/x-www-form-urlencoded",
						"Authorization": "Basic dnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWk6aEtLdkg4ZVNQM0Fi",
						//Token valido durante 12 horas
					}
					}).then(response=>{
						console.log("aqui esta response", response)
						if(response.ok){
							return response.json()
						}
						throw new Error("fail to get access token")
					}).then(responseAddJSON =>{
						// console.log("Response add json", responseAddJSON)
						setStore({accessToken: responseAddJSON.access_token})
						// console.log("Store access token", getStore().accessToken)
					}).catch(err =>{
						console.error(err.message)
					})
					},

			getDetailsOfProperties: () => {

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", `Bearer ${credentials.access_token}`);

				var requestOptions = {
				method: 'POST',
				mode: "no-cors",
				headers: myHeaders,
				redirect: 'follow'
				};

				fetch("https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
				// // var url = urlBaseAPI.concat(getStore().country,"/search?",getStore().filterUrl);
				// var url = "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"
				// console.log("URL fetch: ",url);
			 	// fetch(url,{
				// 		method: "POST",
				// 		mode: "no-cors",
				// 		headers:{
				// 			"Content-Type": "application/json",
				// 			"Authorization": `Bearer ${getStore().accessToken}`
				// 			//Token valido durante 12 horas
				// 		},
				// 		// credentials: "include",
				// 		// body: JSON.stringify(entry),
				// 		// cache: "no-cache",
				// 		// headers: new Headers({
				// 		//   "content-type": "application/json"
				// }).then(response=>{
			 	// 	if(response.ok){
			 	// 		return response.json()
				// 	}
			 	// 	throw new Error("fail to get properties details")
			 	// }).then(responseAddJSON =>{
			 	// 	console.log("Response add json", responseAddJSON)
			 	// 	setStore({propertiesSearch: responseAddJSON.elementList})
			 	// 	console.log("Store properties details", getStore().propertiesSearch)
			 	// }).catch(err =>{
			 	// 	console.error(err.message)
			 	// })
				 },

			// getPlanetDetail:  (id) => {
			// 	fetch(getStore().urlAPI.concat("/planets/",id)).then(response=>{
			// 		if(response.ok){
			// 			return response.json()
			// 		}
			// 		throw new Error("fail to get planet details")
			// 	}).then(responseAddJSON =>{
			// 		console.log("Response add json", responseAddJSON)
			// 		setStore({planetDetail:[responseAddJSON.result.properties]})
			// 		console.log("Store planet detail", getStore().planetDetail)
			// 	}).catch(err =>{
			// 		console.error(err.message)
			// 	})
			// 	},

		}
	};
};

export default getState;

