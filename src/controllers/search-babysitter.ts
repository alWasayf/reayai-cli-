import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { q5 } from '../questions/q5';

export async function searchBabysitter() {
	try{
const query = await prompt([
	{
		type: 'input',
		name: 'name',
		message: 'Enter the nationality to search 🔤 ',
		},


	]);

	const { data: babysitters } = await axios.get(baseUrl +'/individual/individual/babysitters/search',{
          params:query,
	});
	const formattedBabysitters = babysitters.map((c: any) => ({ first_name: c.first_name, last_name: c.last_name,nationality:c.nationality }));
	console.table(formattedBabysitters);
	await q5();
}catch(error){
	console.log(error);
	}
}
