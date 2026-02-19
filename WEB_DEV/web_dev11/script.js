let mypromise = new Promise((resolve, reject) => {
    let data = "this is my daata";
    if (data) {
        resolve(data);
    } else {
        reject("error: No data available");
    }
});
// console.log(mypromise);
mypromise.then((data) => {
    console.log("Success:", data);
}).catch((error) => {
    console.log("Error:", error);
});