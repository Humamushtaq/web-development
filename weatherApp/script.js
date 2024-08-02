// const ApiKey= 
let form = document.querySelector('form')
let search = document.querySelector('#search')
let weather = document.querySelector("#weather")

let getweather = async(city) => {
    // const url= ;
    const response = await fetch(url);
    const data= await response.json()
    console.log(data);
}
form.addEventListener("submit",
    function(event){
        getweather(search.value);
        event.preventDefault();
    }
)
