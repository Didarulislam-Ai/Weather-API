/* 


// const weath = document.querySelector("#data1")
// weath.addEventListener("click", function () {

    async function getData1() {
        try {
            const response = await fetch("https://api.weatherbit.io/v2.0/current?&city=Raleigh,NC&key=325f2744053041368aef9693743941d4&include=minutely")
            const data1 = await response.json();
            console.log(data1);


            document.querySelector(".city_name").innerHTML=data1.data[0].city_name;

            const temp = document.querySelector('.temp')
            temp.innerHTML = data1.data[0].temp;

            const pic = document.querySelector('.icon')
            pic.innerHTML = `<img src="${data1.data[0].weather[0]}" alt=""/>`;

            document.querySelector('.wind_spd').innerHTML = data1.data[0].wind_spd;

            const humidity = document.querySelector('.rh')
            humidity.innerHTML = data1.data[0].rh;

            document.querySelector('.clouds').innerHTML = data1.data[0].clouds;

        }
        catch (e) {
            console.log(e);
        }
    }

    getData1();
//});




async function getData2() {
    try {
        const response = await fetch("https://api.weatherbit.io/v2.0/current?&city=Tokiyo&key=325f2744053041368aef9693743941d4&include=minutely")
        const data2 = await response.json();
        console.log(data2);


        document.querySelector(".city_name").innerHTML = data2.data[0].city_name;

        const temp = document.querySelector('.temp')
        temp.innerHTML = data2.data[0].temp;

        document.querySelector('.icon').innnerHTML = `<img src="${data2.data[0].weather[0]}" alt="h"/>`;

        document.querySelector('.wind_spd').innerHTML = data2.data[0].wind_spd;

        const humidity = document.querySelector('.rh')
        humidity.innerHTML = data2.data[0].rh;

        document.querySelector('.clouds').innerHTML = data2.data[0].clouds;

    }
    catch (e) {
        console.log(e);
    }
}
getData2();


document.getElementById("data1").addEventListener("click" , getData1);



 */