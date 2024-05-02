function isPalindrome(str) {
   
    var lower = str.toLowerCase();
    var reversed = lower.split('').reverse().join('');
   return lower === reversed;
  }
  
  console.log(isPalindrome('Madam')); 
  console.log(isPalindrome('Peace'));