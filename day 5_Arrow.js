// arrow function Print odd numbers in an array

oddNumsFun = () => {

  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const oddNumbers = arr.filter(num => num % 2);
  console.log(oddNumbers);
}
oddNumsFun();


// arrow function Convert all the strings to title caps in a string array

/*upperCasedFun = () => {

  const names = ["welcome to office, thanks for joining, she is walking"];
  const uppercased = names.map(name => name.toUpperCase());
  console.log(uppercased);
}
upperCasedFun();*/

// arrow function Convert all the strings to title caps in a string array

function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(titleCase("I'm a student of guvi for learning full stack develpoment"));

//Sum of all numbers in an array

const nums = [60, 50, 40, 80];
const output = nums.reduce((sum, curr) => sum + curr, 0);
console.log(output);

//Return all the prime numbers in an array

primeFunction = () => {
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  let arrPrime = [];
  arr.forEach(function(num) {
      var primeNum = isPrime(num);
      if(primeNum == true)
  arrPrime.push(num);
  });
  console.log(arrPrime);
  }
  primeFunction();

  function isPrime(num) {
      for (let i = 2; i * i <= num; i++)
          if (num % i === 0)
            return false; 
      return num > 1;
  }

  //Return all the palindromes in an array
  
  palindromesFunction = () => {
    let arrmain = [1,2,2,1];
    let isPal = isPalindromefun(arrmain);
    console.log(""+isPal);
    }
    palindromesFunction();
    
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

    