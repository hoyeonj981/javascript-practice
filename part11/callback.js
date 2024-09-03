function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "tester"};
        callback(data);
    }, 1000);
}

fetchData(function(result) {
    console.log("data fetcehd : " + result.id + ", " + result.name);
});