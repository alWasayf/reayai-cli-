import { prompt } from 'inquirer';
import { q2 } from './q2';
import { q3 } from './q3';

export async function q1() {
	const { q1Answer } = await prompt({

		type: 'list',
	    name: 'q1Answer',
		message: 'Please choose what you want!',
        choices: ['I need of a babysitter', 'I looking for a nanny job', 'Quit'],
	});

	if (q1Answer ==='I need of a babysitter') {
		await q2();
	}
	else if (q1Answer === 'I looking for a nanny job'){
		await q3();
	}else if (q1Answer === 'Quit'){
    	console.log('Bey Bey');
		process.exit(0);
	}

	/*const { username, password } = await prompt([
		{
			type: 'input',
			name: 'username',
			message: 'Enter your username 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);

	if (username !== 'ahlam' || password !== 'gg') {
		console.log('Wrong username & password, bye!');
		process.exit(0);
	}
	*/
}
