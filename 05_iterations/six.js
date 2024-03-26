// // const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( (item) => {
// //     if(item == "java"){
// //         console.log(item+" found");
// //     }
// // })

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (nums) => nums > 5) 
// const newNums = myNums.filter( (nums) => { 
//     return nums > 5
// }) 

// console.log(newNums);

// const newMyNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newMyNums.push(num)
//     }
// })

// console.log(newMyNums);

const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1987, edition: 2004 },
    { title: 'Book Two', genre: 'Science', publish: 1988, edition: 2005 },
    { title: 'Book Three', genre: 'History', publish: 1982, edition: 2006 },
    { title: 'Book Four', genre: 'Fiction', publish: 1982, edition: 2007 },
    { title: 'Book Five', genre: 'Science', publish: 1986, edition: 2008 },
    { title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2002 },
    { title: 'Book Seven', genre: 'History', publish: 1982, edition: 2003 }

]

// const userBooks = books.filter( (bk) => bk.genre === 'History' )
// const userBooks = books.filter( (bk) => { return bk.publish >= 1985} )
const userBooks = books.filter( (bk) => { return bk.publish >= 1985 && bk.genre == "Science"} )

console.log(userBooks);