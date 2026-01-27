var a=10
console.log(a);
function demo(){
    let b=20
    console.log(b);
}
demo()
var a=10
console.log(a);
function demo(){
    let b=20
    console.log(b);
}
demo()

let user={
    fullname:"Tushar Sharma ",
    address:"palwal",
    mobileno:9953499271,
    favcolor:["black","white","blue"]
}
console.log(user.favcolor[1])
console.log(Object.keys(user))
console.log(Object.values(user));

const car = {
    make:"mahindra",
    model:"thar"
};
// object.seal(car);

Object.seal(car);
car.model="XEV9E"
car.color="blue"; // This property addition is ignored.
console.log(car.color);
