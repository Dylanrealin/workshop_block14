const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
/* I created an array of numbers.*/

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }
}
/* I created a "for if loop".  It starts with i equals 0, and it will i< numbers.length means
it will go through the loop until it gets to the end of my array, named "numbers". i++ means 
that each time is passes through the loop, it will add 1 to the value of i.  Next "if" the value of 
i in the array "numbers" has a remainder not eqaul to zero, consol.log will print such numbers
(it will print only the odd numbers in the list)*/

console.log("-----------------------------------------------------------------------------------")

/* first I will create a function that will take an input of a word*/
function countVowelsAndConsonants(word) {
    let vowels = 0;
    let consonants = 0;
/* we want the function to test and run two variables, vowels and consonants, so I set these to zero 
before creating a for/if/else loop*/
    for(let i = 0; i < word.length; i++) {
/* this sets i to zero, and will add 1 to i each time it goes through the word loop.  The loop 
will continue until it gets to the end of the "length" of the "word" that is run in the function*/
    const letter = word[i];

    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowels++;
    } else {
        consonants++;
    }
}
/* if i is equal to any of the vowels, it will add one value to the variable vowels, if a letter is 
any other letter (a consonant) it will add one value to "consonants".  The || symbol means "or"*/

console.log('The word "${word}" has $(vowels} vowels and ${consonants} consonants.');
}

countVowelsAndConsonants("hello")

console.log("--------------------------------------------------")

const array = [1, -1, 2, -3, 5, -8, 13]

array.reverse()

console.log(array)

/* for this exercise, I created an array of numbers.  Then, I used "array.reverse" to print out the
array in reverse. */

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5) console.log("Fizz Buzz");
    else if(i % 3 === 0) console.log("Fizz");
    else if(i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
}

fizzBuzz(100)

/* I created a function called fizzBuzz that will take a number(num) input. Then I created a for loop which
made the variable i start at the value of 1, go up to the number being tested(num), and the loop will add 1 
each time it goes through the loop.  

Some of the numbers will be divisible by 3 or 5, so I want to test the ones that are divible by both first, 
or else I won't get "Fizz Buzz".  So, the first "if" line says to print Fizz Buzz if these requirements are met

The first "else if" line says to print "Fizz" if the number is NOT divisible by BOTH 3 and 5, but IS divisible
by 3.

The second "else if" line says to print "Buzz" if the number is NOT divisible by BOTH 3 and 5, but IS divisible
by 5.

The "else" line says to print the value of "i" if it does not meet any of the other requirements.*/