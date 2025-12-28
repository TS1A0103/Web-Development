let x= 10
let y= 'Vamsi'
let z= true

console.log(x);
console.log(y);
console.log(z);

var box1 = "car"
console.log(box1);
box1 = "Bike"
console.log(box1);

let box2 = "car"
console.log(box2);
box2 = "Bike"
console.log(box2);

const box3 = "car"
console.log(box3);
//(box3 = "Bike")        const value can't be changed
//console.log(box3);


let salary = 50000;
let balance = salary-(15000+5000)

balance -= 5000
console.log("Updated balance:", balance);

if(balance > 8000){
    console.log("yess need to buy");
}
else{
    console.log("EMI");
}

let ws = true
let yw = true

if(ws && yw){
console.log("you can buy iphone and make shopping");
}
else{
console.log('stick to only one')
}

for(i=1; i<=10; i++){
    console.log("print numbers from 1 to 10", i);
}

let value = 1
while(value<=10){
    console.log("print numbers", value);
    value++;
}

function orderbiryani(){
    console.log("birani, coke, water");
}
orderbiryani()
