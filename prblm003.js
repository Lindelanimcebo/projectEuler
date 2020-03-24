function largestPrimeFactor(number) {

  const isPrime = n => {
    if (n <= 3)
      return n > 1;
    
    if (n%2 == 0 || n%3 == 0)
      return false;
    
    let i = 5;
    while (i*i <= n){
      if (n%i == 0 || n%(i+2) == 0)
        return false;
      i+=6;
    }
    return true;
  }

  if (isPrime(number))
    return number;

  for (let j = Math.floor(number/2), k=2; j>=2 ; j=Math.floor(number/k), k++){
    if (number%j == 0 && isPrime(j))
      return j;
  }

  return 1;

}

largestPrimeFactor(13195);
