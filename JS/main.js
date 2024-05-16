
//Ciclo for da 1 a 101 con incremento di 1 
for(i = 1; i < 101 ; i++ ){
    //verifico se il numero è divisibile sia per 5 che per 3 
    if(i % 15 === 0){
        //Stampo in console la scritta FizzBuzz perchè ho soddisfatto la condizione precedente
        console.log('FizzBuzz' , i);
    //verifico se il numero è divisibile per 5
    }else if(i % 5 === 0){
        //Stampo in console la scritta Buzz perchè ho soddisfatto la condizione precedente
        console.log('Buzz', i);
    //verifico se il numero è divisibile per 3
    }if(i % 3 === 0){
        //Stampo in console la scritta Fizz perchè ho soddisfatto la condizione precedente
        console.log('Fizz', i);
    }else{
        console.log(i);
    }
}