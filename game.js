

// console.log(Math.random());

// console.log('hello world');

// console.log('alexa' + ' ' + 'rae');

// console.log('3'+'7');

// console.log(parseInt('8')+9);

// console.log(parseFloat(5.6)+5);

// console.log('Alexa rae'.substring(0,5));

// var myName = 'Alexa Rae';

// console.log(myName);

// myName = 'Alexa';

// console.log(myName);

// console.log(myName + ' totally knows what she is doing');

// console.log(true && true);
// console.log(false && true);
// console.log(false && false);
// // requires both values to be true

// console.log(true || false);
// // requires only one value to be true

// console.log(true || false && true);
// // will do or statement first, then and statement

// console.log(5>7);
// console.log(5>=5);
// console.log(5 === 7);

// var myAge = 24;

// if(myAge <= 9) {
// 	console.log('Drink milk.');
// }
// else if(myAge <= 20) {
// 	console.log('drink soda')
// }
// else {
// 	console.log('Get drunk!');
// }

function* chooseYourAdventure() {

	yield adventure.start('We\'re going on a safari!');
	yield adventure.say('There are going to be ferocious and cute animals!');
	var myName = yield adventure.ask('Before we begin, what is your name?');
	yield adventure.say('Hi ' + myName + ', good luck on your safari adventure!');
	var myObject = yield adventure.choose('What would you like to bring with you on your adventure?', 'Bug spray', 'Tent', 'Balloon');
	yield adventure.say('You chose a ' + myObject + '!');
	var userContinue = yield adventure.choose('Would you like to continue?', 'Heck yeah!', 'No way.');

	if(userContinue === 'No way.') {
		yield adventure.end('Sorry to see you go :(');
	}
	else {
		var randomNumber = Math.floor(Math.random()*5);

		if(randomNumber < 3) {
			yield adventure.say('You encountered a giraffe');
			}
		else {
			yield adventure.choose('What would you like to do next?', 'Climb a mountain', 'Swim in a river', 'Go home');
		}
	}
}