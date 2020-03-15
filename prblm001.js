/**
 * Uses the Sum of an arithmetic sequence 
 * sum = sum(arithmetic(3)) + sum(arithmetic(5)) - sum(arithmetic(15))
 * subtracting sum(arithmetic(15)) just makes sure the numbers that
 * are multiples of both 3 and 5 are not added twice
 */
function multiplesOf3and5(number) {
  var sum = 0;
  
  var n_3 = number%3 == 0 ? Math.floor(number/3)-1 : Math.floor(number/3);
  sum = sum + (n_3/2)*(2*3 + (n_3 - 1)*3);

  var n_5 = number%5 == 0 ? Math.floor(number/5)-1 : Math.floor(number/5);
  sum = sum + (n_5/2)*(2*5 + (n_5 - 1)*5);  

  var n_15 = number%15 == 0 ? Math.floor(number/15)-1 : Math.floor(number/15);
  sum = sum - (n_15/2)*(2*15 + (n_15 - 1)*15);  

  return sum;
}

multiplesOf3and5(1000);
