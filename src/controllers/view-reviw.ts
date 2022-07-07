import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function viewareview() {

/*	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to view reviews',
		filter: (val) => +val,
	});*/
    const { data: babysitters } = await axios.get(baseUrl + '/individual/babysitters/reviews');
	const formattedBabysitters = babysitters.map((c: any) => ({ first_name: c.first_name, last_name: c.last_name,nationality:c.nationality }));
	console.table(formattedBabysitters);
    
    const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to view reviews',
		filter: (val) => +val,
	});

	const babysitter = babysitters[index];
	const reviews = await axios.get(baseUrl + `/individual/babysitters/reviews${babysitter.id}`);
	console.log( reviews.data);
}