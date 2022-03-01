const getState = ({ getStore, getActions, setStore }) => {
	return {
			store: {
						country: "es",
						urlAPI: "https://api.idealista.com/3.5/" /* {country} + "/search"*/,
						propertiesSearch: [],
						listFavorites: [],
						generalFilters: {
							country: "es", //(string) - values: es, it, pt (requiered)
							operation: "sale", //(string) - values: sale, rent (requiered)
							//propertyType: "homes", //(string) - values: homes, offices, premises, garages, bedrooms (required)
							center: "40.123,-3.242", //(string) - geographic coordinates (WGS84) (latitude,longitude)
							locale: "en", //(string) - search language for summary - values: es, it, pt, en, ca
							distance: 3500, //(double) - distance to center, in metres (ratio)
							locationId: "", //(string) - idealista location code
							//maxItems: 50, //(integer) items per page - 50 as maximun allowed
							//numPage: 5, //(integer) page number (for pagination) - (1,2,3..n)
							maxPrice: 200000, //(double) - maximun price in response
							minPrice: 50000, //(double) - minimun price in response
							sinceDate: "W" //property age - W:last week, M: last month, T:last day (for rent except rooms), Y: last 2 days (sale and rooms)
						},
						homeFilters: {
							minSize: 60, //double min size (from 60 m2 to 1000m2)
							maxSize: 200,//double maxSize (from 60 m2 to 1000m2)
							//virtualTour: false, //boolean virtual tour
							flat: true, //boolean property is a flat
							penthouse: false, //boolean
							duplex: false, //boolean
							studio: false, //boolean
							chalet: false, //boolean
							countryHouse: false, //boolean
							bedrooms: "3", //(string) bedroom number (multivalued field) 0,1,2,3,4: bedroom number separated by commas. examples: "0", "1,4",
							//"0,3", "0,2,4". 4 means "4 or more"
							bathrooms: "3", //(string) bathroom number 0,1,2,3: , bedroom number separated by commas. examples: "0", "0,3",
							//"0,2,3". 3 means "3 or more"
							preservation: "good", //(string) - property preservation - values: good, renew
							elevator: true //(boolean) 
						},
						
			},
			actions: {

			//https://api.idealista.com/3/es/search?locale=es&maxItems=20&numPage=1&operation=sale&order=publicationDate
			//&propertyType=garages&sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&locationId=0-EU-ES-28

			// map de array de objetos añadiendo /search?&...&...

			// propertiesSearch: (generalFilters, homeFilters) => {
			//	const search.map
			// 	fetch(getStore().urlAPI.concat("/{country}/","search")).then(response=>{
			// 		if(response.ok){
			// 			return response.json()
			// 		}
			// 		throw new Error("fail to get people details")
			// 	}).then(responseAddJSON =>{
			// 		console.log("Response add json", responseAddJSON)
			// 		setStore({peopleDetail:[responseAddJSON.result.properties]})
			// 		console.log("Store people detail", getStore().peopleDetail)
			// 	}).catch(err =>{
			// 		console.error(err.message)
			// 	})
			// 	},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
			}
		}
	};
};

export default getState;

