// In your video, please:
// - Introduce the challenge
// - Demonstrate how to live-cLoom Message - 1 March 2023ode the solution
// - Explain each line of code (this can be done while live-coding or after)
// - Show that the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
// - Share a challenge or question you had when you solved it the first time

// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

var number = 25

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Fizz")
} else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz")
} else {
    console.log(number)
}