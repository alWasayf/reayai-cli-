import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { q4 } from '../questions/q4';

export async function createIndividual() {
	try{
	const individualData = await prompt([
		{
			type: 'input',
			name: 'first_name',
			message: 'Enter first name ',
		},
		{
			type: 'input',
			name: 'last_name',
			message: 'Enter last name ',
		},
		{
			type: 'input',
			name: 'age',
			message: 'Enter age number ',
		},
		{
			type: 'input',
			name: 'number_children',
			message: 'Enter number of children',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter phone ',
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);

	const t= await axios.post(
		baseUrl + '/individual/login',
		{
			...individualData,
		},
	);
  globalData.token=t.data.token
	console.log(`Individual for ${individualData.first_name}, has been added ✅`);

	await q4();

}catch(error){
	console.log(error);
	}
}
