// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0],drivers[1]];
}
const returnLastTwoDrivers = function(drivers) {
    let x = drivers.length;
    return [drivers[x-2],drivers[x-1]];
}

let selectingDrivers= [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier (integer){
return function (fare) {
    return integer*fare;
};
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function selectDifferentDrivers (drivers,action){
    return action(drivers);
}

console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));