
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
			yield adventure.say('A lion came and ate you! Oh no.');
			}
		else {
			yield adventure.say('A tribe adopted you and you lived happily ever after.');
		}
	}

}