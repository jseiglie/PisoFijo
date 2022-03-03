const urlRequestTokenAPI = "https://api.idealista.com/oauth/token?grant_type=client_credentials&scope=read";
const urlBaseAPI = "https://api.idealista.com/3.5/"; /* {country} + "/search"*/

const getState = ({ getStore, getActions, setStore }) => {

	return {
			store: {	
				country: "es", //(string) - values: es, it, pt (requiered)
				filterUrl: [],
				accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0NjM1OTA2MCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiNWM1MjE4YzAtMDQ4ZC00NDQ5LWEzMmYtMTI1NTlhZTMzODJkIiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.oywtkhBrWiV_ciALZ1ZACrEBTO632hd7kJUEu9DMm4Q",
					//Example: https://api.idealista.com/3/es/search?locale=es&maxItems=20&numPage=1&operation=sale&
					//order=publicationDate&propertyType=garages&sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&
					//locationId=0-EU-ES-28
				propertiesSearch: [],
				listFavorites: []						
			},
			actions: {

			addElementListArr: (inputValue) => {
				setStore({list:[...getStore().list, inputValue]})
			},

			getFilterUrl: url =>{
				setStore({filterUrl: url})
			},

			getAccessToken: () => {
				console.log(" aqui urlRequestTokenAPI",urlRequestTokenAPI)
				fetch(urlRequestTokenAPI,{
					method: "POST",
					headers:{
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
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
			 	fetch(urlBaseAPI.concat(getStore().country,"/search?",getStore().filterUrl),{
						method: "POST",
						mode: "no-cors",
						headers:{
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().accessToken}`
							//Token valido durante 12 horas
						},
						// credentials: "include",
						// body: JSON.stringify(entry),
						// cache: "no-cache",
						// headers: new Headers({
						//   "content-type": "application/json"
				}).then(response=>{
			 		if(response.ok){
			 			return response.json()
					}
			 		throw new Error("fail to get properties details")
			 	}).then(responseAddJSON =>{
			 		console.log("Response add json", responseAddJSON)
			 		setStore({propertiesSearch: responseAddJSON.elementList})
			 		console.log("Store properties details", getStore().propertiesSearch)
			 	}).catch(err =>{
			 		console.error(err.message)
			 	})
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

