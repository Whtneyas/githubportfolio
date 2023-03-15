import { onRouteChanged } from "./modules/router.js";
import { fetchRepos } from "./modules/fetch.js"

let Alldata;

window.addEventListener('hashchange', function(){
    onRouteChanged(Alldata)
})

async function dataDisplay() {
    try {
      const data = await fetchRepos();     // Call the fetchData function to fetch data from the API.
      Alldata = data;                     // Assign the fetched data to the Alldata variable.
      console.log("mijn all data" , Alldata);
    }
    catch (error) {                     // Add error handling for any errors that occur during the fetch operation.
      console.log(error);
    }
  }