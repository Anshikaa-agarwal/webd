const maps = [0,10,20,30,40,50]

// maps.forEach((val, index) => {
//     maps[index] = val+10;
// })

const neww = maps.map((num) => {
    return num/2;
})

const greater = maps.filter((num) => {
    return num < 15;
})
console.log(neww)
console.log(greater);
