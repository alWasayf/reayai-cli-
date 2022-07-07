import { prompt } from 'inquirer';
import { createBabysitter } from '../controllers/create-babysitter';
import { createIndividual } from '../controllers/create-individual';
import { singIndividual } from '../controllers/singin-individual';
import { q4 } from './q4';

	export async function q2() {
		const { q2Answer } = await prompt({
			type: 'list',
			name: 'q2Answer',
			message: 'Please choose an action !',
			choices: [
				'1-New , Apply now! 🙉',
				'2-Sing in  🌿',
				'3-Quit '
			],
			filter: (val) => +val[0],
		});


  switch(q2Answer){
	case 1: 
	        await createIndividual();
	         break;
    case 2: await singIndividual();
	         break;
	case 3 : 
	       console.log('Bey bey!');
	   		process.exit(0);

	default:
			break;
  }
  await q4();

}
