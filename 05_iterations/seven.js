const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num+10 )

const newNums = myNums.map((num) => num*10).map( (item) => item + 1).filter( (val)=> {
    return val > 40;
})


console.log(newNums);

