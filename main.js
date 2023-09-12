let array=[1,2,3,4,5,6,7,8,9,10];
var xx=0;
let z=0;
for(let i=0;i<10;i++){
    if(array[i]%2==0){
        xx+=array[i]
    }
}
console.log(xx)
document.writeln("the result is : " +xx);
document.write("<br>")
// ............................
for(let i=0 ; i<10;i++){
    
    if(i<5){
        z+=array[i]
    }
}
console.log(z)
document.writeln( "the result is : " +z);
// ...............................
let obj={
    name:"Neven Ghasoun",
    id:3,
    age:24,
    email : "nevenghasoun@gmail.com"
};
console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.age);
console.log(obj.email);

document.write("<br>");
document.write(obj)
document.write("<br>");
document.write(obj.name);
document.write("<br>");
document.write(obj.id);
document.write("<br>");
document.write(obj.age);
document.write("<br>");
document.write(obj.email);

