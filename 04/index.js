a = 2
b = 1

function solution(a, b) {
var month =[31,29,31,30,31,30,31,31,30,31,30,31]
var count = 0;
   for(let i=0; i<a; i++){
       count = month[i]+b
        } 
   return count
}

solution(a, b)