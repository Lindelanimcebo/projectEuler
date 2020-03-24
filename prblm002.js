/**
 * The even terms of a Fibonacci sequence can be defined by:
 * T(n) = T(n-1)*4 + T(n-2)
 * Sum up all the terms until the next term is greater than he current term
 */
function fiboEvenSum(n) {

  let sum = 0, tn_1 = 0, tn = 2;

  while (tn < n){
    [tn, tn_1, sum] = [4*tn + tn_1, tn , sum + tn];
  }

  return sum;
}

fiboEvenSum(10);
