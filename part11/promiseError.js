new Promise((resolve, reject) => {
    throw new Error("erorr");
}).catch(function (error) {
    console.log("error handling");
}).then(() => console.log("next job is processing"));