let Name = 3

console.log(++Name);


console.log("my name is : " +  Name);




i = 0;
for 
(let i = 0; i <= 100; 
    i = 3+i) {
    
    console.log(i);
    
    
}


let arr = [1,2,34,5,6,34,5,6,7,8,9,0];
arr.reverse();
console.log(arr);


let arrrr = [1,2,34,5,6,34,5,6,7,8,9,0];
console.log(arrrr.pop());


num = 19;
if (num<0) {
    
    console.log("negative");
    
}
else
    console.log("positive");
    



let arrr = [1,2,3,4,5,-6,-7,8,9,0];


function printpositivenum(arrr){
    for (let num of arrr) {
        if (num>=0) {
            console.log(num);
            
        }
    }
}
printpositivenum(arrr);


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