// Task 1 Given a number. Print “odd” if the number is odd and “even” if itʼs even.
let a = 5
if(a%2==0){
    console.log('even')
}
else{
    console.log('odd')
}

//Task 2 Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
//the angles of a triangle equals 180 degrees).
let b = 45
let c = 90
let d = 180-(b+c)
console.log(d)

// Task 3 Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.
let int = 101
let l = String(int)
let e = l[l.length-1]
let ka = l.length-1
l = l.slice(0, ka)
let p = e + l
if(int%10 === 0){
    console.log(int)
}else{
    console.log(p)
}

// Task 4 Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let f = 8
let arr =[3, 5, 7]
let arr1 = []
for(let i = 0; i<3; i++){
    if(f%arr[i]===0){
        arr1.push(arr[i])
    }
   }
   arr1 = [] ? console.log(f+' is not a multiple of 3, 5 or 7.' ) : console.log(f+' is a multiple of '+arr1+' ')

//    Task 11. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
//    sum, print the quotient, otherwise print the remainder.
let a1 = 5
let b1 = String(a1)
let k1 = 1
let sum1 = 0
for (let i = 0; i<b1.length; i++){
   k1 = k1*b1[i]
   sum1 = sum1 + Number(b1[i])
   }
   k1%sum1 == 0 ? console.log(k1/sum1 ) : console.log(k1%sum1)

//    Task 5

let array = [ 10, 9, 1, 2, 3, 4]
for (let j =0; j < array.length; j++){
    for (let i=0; i < (array.length-1-i);i++){
    if(array[i]>array[i+1]){
             let o=array[i]
             array[i]=array[i+1]
             array[i+1]=o
                            } 
              }
}
console.log(array)