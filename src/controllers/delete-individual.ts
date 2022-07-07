import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function deleteindividual(){
	try{
	// const { data: individuals } = await axios.get(baseUrl + '/individual/individual');
	// const formattedIndividuals = individuals.map((c: any) => ({  first_name: c.first_name,last_name:c.last_name,
    //     age:c.age, phone: c.phone, number_children:c.number_children }));
	// console.table(formattedIndividuals);

	// const { index } = await prompt({
	// 	type: 'number',
	// 	name: 'index',
	// 	message: 'Enter index to delete ❌',
	// 	filter: (val) => +val,
	// });
	// const individual = individuals[index];
	await axios.delete(baseUrl + '/individual/individuals/delete'
	,{

		headers: {
			token:globalData.token,
		}}
	);
	console.log('Individual  has been deleted ✅');
}catch(error){
	console.log(error);
}
}
