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
				filters:{
					//generalFilters: 
					operation: "sale", //(string) - values: sale, rent (requiered)
					propertyType: "homes", //(string) - values: homes, offices, premises, garages, bedrooms (required)
					center: "40.123,-3.242", //(string) - geographic coordinates (WGS84) (latitude,longitude)
					locale: "es", //(string) - search language for summary - values: es, it, pt, en, ca
					distance: 3500, //(double) - distance to center, in metres (ratio)
					locationId: "", //(string) - idealista location code
					maxPrice: 200000, //(double) - maximun price in response
					minPrice: 50000, //(double) - minimun price in response
					sinceDate: "W", //property age - W:last week, M: last month, T:last day (for rent except rooms), Y: last 2 days (sale and rooms) homeFilters: 
					// homeFilters: 
					minSize: 60, //double min size (from 60 m2 to 1000m2)
					maxSize: 200,//double maxSize (from 60 m2 to 1000m2)
					virtualTour: false,
					flat: true, //boolean property is a flat
					penthouse: false, //boolean
					duplex: false, //boolean
					studio: false, //boolean
					chalet: false, //boolean
					countryHouse: false, //boolean
					bedrooms: "3", //(string) bedroom number (multivalued field) 0,1,2,3,4: bedroom number separated by commas. examples: "0", "1,4", "0,3", "0,2,4". 4 means "4 or more"
					bathrooms: "3", //(string) bathroom number 0,1,2,3: , bedroom number separated by commas. examples: "0", "0,3", "0,2,3". 3 means "3 or more"
					preservation: "good", //(string) - property preservation - values: good, renew
					bankOffer: false, //owner is a bank - works for sale in spain
					elevator: true //(boolean)
				},
				propertiesSearch: exampleRequestIdealista.elementList,
				selected: [],
				listFavorites: []
			},
			actions: {

			addElementListArr: (inputValue) => {
				setStore({list:[...getStore().list, inputValue]})
			},

			filterEntries: filters =>Object.entries(filters), // {country: "es", operation: "sale"} => [["country", "es"], ["operation","sale"]]
			filteredArrElementsNotEmpty: arr =>{
				return arr.filter(el => el[1] != '' || el[1] == true)
			},
			concatenateArr: (arr)=>{
				return ((arr.map(el =>el.join("="))).join("&"))
			},
			UrlFilters: filters =>{
				const url = getActions().concatenateArr(
							getActions().filteredArrElementsNotEmpty(
							getActions().filterEntries(filters)));
				console.log("UrlFilters: ",url)
				return (url)
			//Output: "operation=sale&center=40.123,-3.242&locale=es&distance=3500&maxPrice=200000&minPrice=50000&sinceDate=W"
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

