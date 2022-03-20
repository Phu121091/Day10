let obj = {
    b:2,
    a:1,
    c:3,
};

let arr =(Object.keys(obj));
for(i=0;i<arr.length;i++)
{
    arr[i]= arr[i].toUpperCase();
}
console.log(arr);

//Nếu phải dùng đến method array thì :
// let arr=[];
// for (let x in obj) {
//     arr.push(x);
//  }
//  for(i=0;i<arr.length;i++)
// {
//     arr[i]= arr[i].toUpperCase();
// }
// console.log(arr);
