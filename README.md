Write a recursive function that adds all values up to the input number 
example:
input 5 => outputs 5+4+3+2+1 = 15


const addUP =(num) => {
  if(num === 0){
    return 0;
  } 
  return addUp(num - 1) + num;
}

so i always try to remember my inputs and outputs at this part, the function
takes an input which you have as addUp(num -1) and the output is also a number so 
addUp(num -1) is also a number, all you are missing is keeping the

right yup solved! and so now it will be just like 5+4+3+2+1+0

_______________________________________________

Write a function that recursively determines if a string is a palindrome

examples

isPalindrome("abcba") ➞ true

isPalindrome("b") ➞ true

isPalindrome("") ➞ true

isPalindrome("ad") ➞ false

isPalindrome("noon") ➞ true
close, you want the string without the letters you checked the first part will check the whole string again
you want your input to contain the string without what you've checked
right, and without the last


const isPal = (string) => {
  if (string.length <=1> {
    return true;
  } else if(string[0]===string[string.length-1]{
    return isPal(()string.substring(1,(string.length-2
  } else {
    return false;
  }


  }

  }
}

Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration.

In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.

alt text

Return the number of dots that exist in the whole pentagon on the Nth iteration.

Examples
pentagonal(1) ➞ 1

pentagonal(2) ➞ 6

pentagonal(3) ➞ 16

pentagonal(8) ➞ 141

const countDots =(num)=> {
  if(num === 0){
    return 0;
  } 
  return countDots(num + (num - 1) * 5);
}







