function largestPalindromeProduct(n) {

  if (n==1)
    return 9;
  
  if (n%2==0){
    let n_2  = n/2;
    return parseInt( "9".repeat(n_2).concat("0".repeat(n), "9".repeat(n_2)) );
  }

  if (n==3)
    return 906609;

  let n_2 = (n-1)/2

  return parseInt( "9".repeat(n_2).concat("6".repeat(n_2), "00", "6".repeat(n_2), "9".repeat(n_2) ) );

}

largestPalindromeProduct(3);
