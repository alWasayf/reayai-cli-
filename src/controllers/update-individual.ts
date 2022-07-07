import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updateindividual(){
    const { data: individuals } = await axios.get(baseUrl + '/individual/individual');
	const formattedIndividuals = individuals.map((c: any) => ({ first_name: c.first_name,last_name:c.last_name,
         age:c.age, phone: c.phone, number_children:c.number_children }));

         console.table(formattedIndividuals);
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
    const individual = individuals[index];

	const newIndividual = await prompt([
		{
			type: 'input',
			name: 'first name ',
			message: `Enter new first name or press enter to keep it as (${individual.first_name})`,
			filter: (val) => {
				if (val.trim() === '') return individual.first_name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'last name ',
			message: `Enter new last name  or press enter to keep it as (${individual.last_name})`,
			filter: (val) => {
				if (val.trim() === '') return individual.last_name;
				return val;
			},
		},
        {
			type: 'input',
			Int: 'age ',
			message: `Enter new age or press enter to keep it as (${individual.age})`,
			filter: (val) => {
				if (val.trim() === '') return individual.age;
				return val;
			},
		},
        {
			type: 'input',
			password: 'password ',
			message: `Enter new password  or press enter to keep it as (${individual.password})`,
			filter: (val) => {
				if (val.trim() === '') return individual.password;
				return val;
			},
		},
			
        {
			type: 'input',
			name: 'phone ',
			message: `Enter new phone  or press enter to keep it as (${individual.phone})`,
			filter: (val) => {
				if (val.trim() === '') return individual.phone;
				return val;
			},
		},
        {
			type: 'input',
			name: 'number children ',
			message: `Enter new number children  or press enter to keep it as (${individual.number_children})`,
			filter: (val) => {
				if (val.trim() === '') return individual.number_children;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/individual/individuals${individual.id}`, newIndividual);

	console.log(`Contact for ${ newIndividual.first_name}, has been updated ✅`);
 }