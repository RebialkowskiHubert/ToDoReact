const serverUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues";

export const carsApiUrl = vin => 
    vin ? `${serverUrl}/${vin}?format=json` : "";