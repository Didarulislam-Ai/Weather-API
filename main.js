async function getData( city_were_searching_for ) {
    try {
        const response = await fetch("https://api.weatherbit.io/v2.0/current?&city=" + city_were_searching_for + "&key=325f2744053041368aef9693743941d4&include=minutely")
        const data = await response.json();
        console.log(data);


        const city_name = document.querySelector(".city_name");
        city_name.innerHTML = data.data[0].city_name;
        
        const temp = document.querySelector('.temp')
        temp.innerHTML = data.data[0].temp;

        const pic = document.querySelector('.icon')
        pic.innerHTML = `<img src="${data.data[0].weather[0]}" alt=""/>`;

        document.querySelector('.wind_spd').innerHTML = data.data[0].wind_spd;

        const humidity = document.querySelector('.rh')
        humidity.innerHTML = data.data[0].rh;

        document.querySelector('.clouds').innerHTML = data.data[0].clouds;

    }
    catch (e) {
        console.log(e);
    }
}

getData( "Toronto,Canada" );

const city_select = document.getElementById("city");
city_select.addEventListener( "change", e => {
    // console.log("did I do this right?");
    console.log( city_select.value );
    getData( city_select.value );   //value means option value html change based on id city names 
});
