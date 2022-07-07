import { prompt } from 'inquirer';
import { createBabysitter } from '../controllers/create-babysitter';
import { singBabysitter } from '../controllers/singin-babysitter';

export async function q3() {
	const { q3Answer } = await prompt({
		type: 'list',
		name: 'q3Answer',
		message: 'Please choose an action !',
		choices: [
			'1-New , Apply now! 🙉',
			'2-Sing in  🐊',
			'3-Quit ✋🏻'
		],
		filter: (val) => +val[0],
	});
	switch(q3Answer){
		case 1: await createBabysitter();
				 break;
		case 2: await singBabysitter();
				 break;
		case 3 : 
			   console.log('Bey bey!');
				   process.exit(0);
	
		default:
				break;
	  }
}