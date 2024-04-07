
function fizzBuzz(){

    var array = [];
    var number = 1;

    while(number <= 100){

        if (number%5 === 0 && number%3 === 0){
            array.push('Fizzbuzz');
        }
        else if (number%5 === 0){
            array.push('Buzz')
        }
        else if (number%3 === 0){
            array.push('Fizz')
        } else {
            array.push(number);
        }
    
        console.log(array);

        number++;

    }
}


fizzBuzz();