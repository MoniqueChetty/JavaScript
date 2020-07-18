//107 Objects

var mCars = {
    "p1": "350 kmph",
    "gallardo": "320kmph",
    "veyron": "409 kmph",
    "agera": "429 kmph"
}
console.log(mCars);

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: "429 kmph",
    color: "Black",
    spoilers: false,
    applyBrakes: function() {
        setTimeout(function() {
            console.log('Car Stopped');
        }, 5)
    }
}
console.log(mAgera.name);
console.log(mAgera.spoilers);
console.log(mAgera.manufacturer.name);
console.log(mAgera.applyBrakes());
console.log(mAgera.applyBrakes);