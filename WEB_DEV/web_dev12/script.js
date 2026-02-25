let pro = new Promise((resolve, reject) => {
    let proposal = "false"    ;
    if (proposal == "true") {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

pro.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

