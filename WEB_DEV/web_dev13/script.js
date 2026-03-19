
// //promise chaining'

// function print(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(num);
//             resolve();
                
//             }, 1000);
//     });
// }

// print(1)
// .then(() => print(2))
// // .then(() => print(3))

// const pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(num);
//         resolve();
//     }, 1000);
// });


// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data fetched");
//             console.log("Processing data");
//             resolve("Data processed");
//         }, 2000);
//     });
// }

async function fetchData(city) {
    try {
        const API_key = "cac6ddfa6c7445c4f040af26e62cbc68";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")