// let Name = 3

// // console.log(++Name);


// // console.log("my name is : " +  Name);




// i = 0;
// for 
// (let i = 0; i <= 100; 
//     i = 3+i) {
    
//     console.log(i);
    
    
// }


// let arr = [1,2,34,5,6,34,5,6,7,8,9,0];
// arr.reverse();
// console.log(arr);


// let arr = [1,2,34,5,6,34,5,6,7,8,9,0];
// // console.log(arr.pop());


// num = 19;
// if (num<0) {
    
//     console.log("negative");
    
// }
// else
//     console.log("positive");
    



// let arr = [1,2,3,4,5,-6,-7,8,9,0];


// function printpositivenum(arr){
//     for (let num of arr) {
//         if (num>=0) {
//             console.log(num);
            
//         }
//     }
// }
// printpositivenum(arr);


// Q3.

function palindrome() {
    let arr = [1, 2, 3, 2, 1];
    let original = []; // [1,2,3,2,1]
    let reverse = [];  // [1,2,3,2,1]

    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i]);
    }

    while (arr.length > 0) {
        reverse.push(arr.pop());
    }

    for (i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }
    

    return "palindrome";
}

console.log(palindrome());