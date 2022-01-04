// anonymous function odd numbers in an array

(function () {

//var oddNums = "";
        
// odd numbers in start and end
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//const oddNumbers = arr.map((num) => (num % 2 != 0 ? num : 0));
//const oddNumbers = arr.map((num) => ((num % 2 != 0) ? num : null));
const oddNumbers = arr.filter(num => num % 2);
console.log(oddNumbers);
})();

// anonymous function Convert all the strings to title caps in a string array

(function () {

  let arrayString = ["welcome to office","thanks for joining","she is walking"];
  let arrayStringCase = [];
  arrayString.forEach(function(str) {
      var strModified = titleCase(str);
  arrayStringCase.push(strModified);
  });
  console.log(arrayStringCase);
  })();
  
  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    //arrayString.forEach(function(str){
    //  copyItems.push(str)
    //})
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  // anonymous function Sum of all numbers in an array

(function () {
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const sum = arr.reduce(add, 0); 
  console.log(sum);
  })();
  
  function add(accumulator, a) {
    return accumulator + a;
  }
  

    //Return all the prime numbers in an array

    (function () {
      let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      let arrPrime = [];
      arr.forEach(function(num) {
          var primeNum = isPrime(num);
          if(primeNum == true)
      arrPrime.push(num);
      });
      console.log(arrPrime);
      })();
      
      function isPrime(num) {
          for (let i = 2; i * i <= num; i++)
              if (num % i === 0)
                return false; 
          return num > 1;
      }

      
 // anonymous function Return all the palindromes in an array


(function () {
  let arrmain = [1,2,2,1];
  let isPal = isPalindromefun(arrmain);
  console.log(""+isPal);
  })();
  
  function isPalindromefun(arr) {
       //initialize to true
       let isPalindrome = true;
       
       //loop through half length of the array
       for(let i = 0; i < arr.length / 2; i++) {
  
           //check if first half is equal to the second half
           if(arr[i] !== arr[arr.length - i - 1]){
             isPalindrome = false; 
             break;
           }
       }
       
       return isPalindrome;
  }
  
  // anonymous function Return median of two sorted arrays of same size
 
 
 function getMedian(a,b,startA,startB,endA,endB)
 {
     if (endA - startA == 1) {
             return (
                        Math.max(a[startA],
                                 b[startB])
                        + Math.min(a[endA], b[endB]))
                 / 2;
         }
         /* get the median of
     the first array */
         let m1 = median(a, startA, endA);
   
         /* get the median of
     the second array */
         let m2 = median(b, startB, endB);
   
         /* If medians are equal then
     return either m1 or m2 */
         if (m1 == m2) {
             return m1;
         }
   
         /* if m1 < m2 then median must
     exist in ar1[m1....] and
                 ar2[....m2] */
         else if (m1 < m2) {
             return getMedian(
                 a, b, (endA + startA + 1) / 2,
                 startB, endA,
                 (endB + startB + 1) / 2);
         }
   
         /* if m1 > m2 then median must
     exist in ar1[....m1] and
     ar2[m2...] */
         else {
             return getMedian(
                 a, b, startA,
                 (endB + startB + 1) / 2,
                 (endA + startA + 1) / 2, endB);
         }
 }
  
 /* Function to get median
     of a sorted array */
 function median(arr,start,end)
 {
     let n = end - start + 1;
         if (n % 2 == 0) {
             return (
                        arr[start + (n / 2)]
                        + arr[start + (n / 2 - 1)])
                 / 2;
         }
         else {
             return arr[start + n / 2];
         }
 }
 (function () {
 let ar1 = [ 1, 2, 3, 6 ];
 let ar2 = [ 4, 6, 8, 10 ];
 console.log ("Median = "+getMedian(ar1, ar2, 0, 0,ar1.length - 1, ar2.length - 1));
 })();

 // anonymous function Remove duplicates from an array

(function () {
    
  let names = ["John","Peter","Soul","John","Soul","Alex","Soul"];

let uniqueChars = [];
names.forEach((c) => {
  if (!uniqueChars.includes(c)) {
      uniqueChars.push(c);
  }
});

console.log(uniqueChars);

})();

// anonymous function Rotate an array by k times

(function () {
    
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(arrayRotate([1, 2, 3, 4, 5]));
console.log(arrayRotate([1, 2, 3, 4, 5],true));
console.log(arrayRotate(months));

})();

function arrayRotate(arr, reverse) {
 if (reverse) arr.unshift(arr.pop());
 else arr.push(arr.shift());
 return arr;
}

