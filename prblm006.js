/**
* Finding the difference between the sum of the squares of the first n natural numbers and the square of the sum
* Use sigma notation to closed form formulars : https://www.analyzemath.com/math_worksheets/formulas/formulas_for_integers.pdf
*/
function sumSquareDifference(n) {
  
  let Sn = (n*(n + 1)/2)**2;
  let S2n = (n*(n+1)*(2*n + 1))/6;

  return Sn - S2n;
}

sumSquareDifference(100);
