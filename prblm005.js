/**
 * NB : Not the full version yet(implementation of smallest prime factor)
 * 
 * for each position,new smallest multiple = previous * multiplier
 * obtain the multiplier by:
 * 1. find the smallest prime factor of the position
 * 2. devide the position with the smallest prime factor
 * 3. set multiplier to the quotient
 * 4. check if position is a factor of the new smallest multiple
 * 5. devide the quotient with the smallest prime factor
 * 6. repeat 3 - 6 until 4 is false
 */
function smallestMult(n) {

  if (n==1)
    return 1;

  let number = n;
  let num = n;

  while (num>1){

    let num_tmp = num-1;

    if (number%num_tmp != 0){

      const factors = [7, 5, 3, 2];
      let factor = 0;
      for (let i=0; i<factors.length; i++){
        if (factors[i]!=num_tmp && num_tmp%factors[i]==0)
          factor = factors[i];
      }

      if (factor!=0){
        while ( (number*(Math.floor(num_tmp/factor)) % (num-1)) == 0 ){
          Math.floor(num_tmp/=factor);
        }
        number*=num_tmp;
      }else{
        number*=num_tmp;
      }

    }

    num-=1;

  }

  return number;

}

smallestMult(20);
