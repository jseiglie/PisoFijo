import exampleRequestIdealista from "./exampleRequestIdealista.js"
import credentials from "./credentialsAPIIdealista.js";
import Geocode from "react-geocode";
import googleMapsApiKey from "./credentialsAPIGoogle.js";
Geocode.setApiKey(googleMapsApiKey);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

const urlRequestTokenAPI =
  "https://api.idealista.com/oauth/token?grant_type=client_credentials&scope=read";
const urlBaseAPI = "https://api.idealista.com/3.5/"; /* {country} + "/search"*/

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      	baseUrlRegister:
        	"https://3001-programisto1011-4geekaca-kp00eclwlzs.ws-eu38.gitpod.io/api/register",
		baseUrlLogin:
        	"https://3001-programisto1011-4geekaca-kp00eclwlzs.ws-eu38.gitpod.io/api/login",
		baseUrlSearch:
			"https://3001-programisto1011-4geekaca-kp00eclwlzs.ws-eu38.gitpod.io/api/search",
		baseUrlNewProperty:
			"https://3001-programisto1011-4geekaca-kp00eclwlzs.ws-eu38.gitpod.io/api/newproperty",
      	token: null,
      	country: "es", //(string) - values: es, it, pt (requiered)
		filterUrl: "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000",
		accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0Njg4NzE4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiMzcwM2Q3MmEtZjZjNi00N2U2LWIyZDQtNzEzNzMwZjAyOTc2IiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.IX-s6zVpi5aq_bxRPNONnfgz-NAFzDUnKpbs0-R-mjo",
			//Example: https://api.idealista.com/3/es/search?locale=es&maxItems=20&numPage=1&operation=sale&
			//order=publicationDate&propertyType=garages&sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&
			//locationId=0-EU-ES-28
		filters:{
			//generalFilters: 
			operation: "sale", //(string) - values: sale, rent (requiered)
			propertyType: "homes", //(string) - values: homes, offices, premises, garages, bedrooms (required)
			center: "40.4167754,-3.7037902", //(string) - geographic coordinates (WGS84) (latitude,longitude)
			locale: "es", //(string) - search language for summary - values: es, it, pt, en, ca
			distance: 10500, //(double) - distance to center, in metres (ratio)
			locationId: "", //(string) - idealista location code
			maxPrice: 200000, //(double) - maximun price in response
			minPrice: 0, //(double) - minimun price in response
			sinceDate: "M", //property age - W:last week, M: last month, T:last day (for rent except rooms), Y: last 2 days (sale and rooms) homeFilters: 
			// homeFilters: 
			minSize: 30, //double min size (from 60 m2 to 1000m2)
			maxSize: 500,//double maxSize (from 60 m2 to 1000m2)
			virtualTour: false,
			flat: true, //boolean property is a flat
			penthouse: false, //boolean
			duplex: false, //boolean
			studio: false, //boolean
			chalet: true, //boolean
			countryHouse: false, //boolean
			bedrooms: "", //(string) bedroom number (multivalued field) 0,1,2,3,4: bedroom number separated by commas. examples: "0", "1,4", "0,3", "0,2,4". 4 means "4 or more"
			bathrooms: "", //(string) bathroom number 0,1,2,3: , bedroom number separated by commas. examples: "0", "0,3", "0,2,3". 3 means "3 or more"
			preservation: "good", //(string) - property preservation - values: good, renew
			bankOffer: false, //owner is a bank - works for sale in spain
			elevator: false //(boolean)
		},
		distanceRequest: 15000,
		centerRequest: {lat:"40.4167754", lng:"-3.7037902"},
		inputLocation: {address: "barcelona"},
		propertiesSearch: exampleRequestIdealista.elementList,
		// propertiesSearch: [],
		//SearchMenu  DESCOMENTAR DENTRO const submitForm:  actions.search({"url":actions.UrlFilters(store.filters)});
		newProperty: [],
		selected: [],
		nearbyPlaces: [],
		userLogin: [],
		optionsArr: ["flat", "penthouse", "duplex", "studio", "chalet", "countryHouse"]
    },
    actions: {

		stringToFloat: (text) =>{
			return parseFloat(text)
		},

		stringToArr: (text, delimiter) =>{
			return text.split(delimiter);
		},
	
		arrKeysAndValuesToObject: (arrKeys, arrValues) =>{
			// input: arrKeys = [a,b]  arrValues = ["11","12"] -> output: obj ={a:11, b:12}
			var obj = {};
			for (var i = 0; i < arrKeys.length; i++) {
				obj[arrKeys[i]] = arrValues[i];
			} 
			return obj
		},

		addElementListArr: (inputValue) => {
			setStore({ list: [...getStore().list, inputValue] });
		},

     //---------------------------------------------------------------------------------------------
		handleChange: (e, storeSection) => {
				const {name, value} = e.target;
				setStore({storeSection:{...getStore().storeSection, [name]: value}})
				console.log(`${storeSection} change input: `, getStore().storeSection);
		},
		//----------------------------------------------------------------------------------------------

		handleChangeRadio: (e, storeSection) => {
				const {name, value} = e.target;
				if(e.target.checked){
					setStore({storeSection:{...getStore().storeSection, [name]: value}});
					console.log(`${storeSection} change radio: `, getStore().storeSection);
				}
		},
		//----------------------------------------------------------------------------------------------

		//VICTOR - Habría que refactorizar para que no haya que introducir las opciones

		handleChangeSelected: (e, storeSection, optionsArr) => {
				const {value} = e.target;
				optionsArr.map((option) => {
					if(option == value){
						setStore({storeSection:{...getStore().storeSection, [option]: true}});						 
					}
					else{
						setStore({storeSection:{...getStore().storeSection, [option]: false}});
					}       	     
				})
				console.log(`${storeSection} change selected: `, getStore().storeSection); 
		},

		handleChangeCheckbox: (e, storeSection) => {
			const {name, checked} = e.target;
			setStore({storeSection:{...getStore().storeSection, [name]: checked}});
			console.log(`${storeSection} Change Checkbox: `,getStore().storeSection);
		},

		getLatLonByAddress: (addressText, storeSection) =>{
				Geocode.fromAddress(addressText).then(
					(response) => {
						const { lat, lng } = response.results[0].geometry.location;
						const address = `${lat},${lng}`;
						setStore({storeSection:{...getStore().storeSection, "center": address}})
						console.log(`${storeSection} Change Address: `, getStore().storeSection);
					},
					(error) => {
					  console.error(error);
					}
				);	  
		},
		getNearbyPlaces: (typePlaces, location, radius) =>{

			var config = {
				method: 'get',
				url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
				headers: { }
			  };
			  
			  axios(config)
			  .then(function (response) {
				console.log(JSON.stringify(response.data));
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		},

		// Input:{country: "es", operation: "sale"} 
		// Output: [["country", "es"], ["operation","sale"]]
		filterEntries: filters =>Object.entries(filters), 
		filteredArrElementsNotEmpty: arr =>{
			
			return arr.filter(el => el[1] != '' || el[1] == true)
		},
		concatenateArr: (arr)=>{

			return ((arr.map(el =>el.join("="))).join("&"))
		},
		UrlFilters: filtersObj =>{
				const url = getActions().concatenateArr(
							getActions().filteredArrElementsNotEmpty(
							getActions().filterEntries(filtersObj)));
				return (url)
		},
		//Input: {operation: "sale", center: "40.123,-3.242", ...} 
		//Output: "operation=sale&center=40.123,-3.242&locale=es&distance=3500&maxPrice=200000&minPrice=50000&sinceDate=W"
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
						"Authorization": "Basic YWRyM2dycjgzMWFza3FtOTluYXB3Y2MwZTI5b3Y1eWY6aEtLdkg4ZVNQM0Fi",
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

		sendNewProperty: async() =>{
			const response = await fetch(getStore().baseUrlNewProperty, 
				{
					method: 'POST',
					body: JSON.stringify(getStore().newProperty),
					headers:{
						'Content-Type': 'application/json'
					}
				},
			);
			console.log("input New Property: ", getStore().newProperty)
			
			const data = await response.json();
			alert(data.response);
		},

		search: async (data) => { //<-----------------------------------------------------------------------
			// const dato = {url:"operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"}
			// const dato = getStore().filters
			console.log("data en flux", data);
			const resp = await fetch(getStore().baseUrlSearch, {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
				Accept: "application'json",
			  },
			  body: JSON.stringify(data),
			});
			if (resp.ok) {
				// console.log("resp", resp)
				
			  const dataSearch = await resp.json();
			 	setStore({propertiesSearch: dataSearch.elementList}); 
				console.log("Output API: ", getStore().propertiesSearch);
			} else {
			  alert("ALGO FALLO");
			}
		},

      	login: async (email, password) => {
			const opts = {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application'json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			};
			try {
			const resp = await 
				fetch(getStore().baseUrlLogin,
				opts
			);
			if (resp.status !== 200) {
				alert("There has been some error");
				return false;
			}
			const data = await resp.json();
			sessionStorage.setItem("token", data.access_token);
			setStore({token: data.access_token});
			setStore({userLogin: data.identity});
			return true;
			} catch (error) {
			console.error("There's has been an error login in");
			}
		},

		logOut: () => {
			sessionStorage.removeItem("token");
			setStore({ token: null });
		},
		syncTokenFromSessionStore: () => {
			const token = sessionStorage.getItem("token");
			if (token && token != "" && token != undefined)
			setStore({ token: token });
		},
		register: async (data) => {
			console.log("data en flux", data);
			const resp = await fetch(getStore().baseUrlRegister, {
			method: "POST",
			
			headers: {
				"Content-Type": "application/json",
				Accept: "application'json",
			},
			body: JSON.stringify(data),
			});
			if (resp.status == 201) {
				const data = await resp.json();
				sessionStorage.setItem("token", data.access_token);
				setStore({ token: data.access_token });
			} else {
				alert("User already exist, try logging in");
			}
		},
    },
  };
};

export default getState;
