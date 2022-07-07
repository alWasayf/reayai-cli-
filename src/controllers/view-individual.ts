import axios from 'axios';
import { baseUrl } from '..';

export async function viewindividual() {
    try{
    const { data: individuals } = await axios.get(baseUrl + '/individual/individual');
	const formattedIndividuals = individuals.map((c: any) => ({ first_name: c.first_name,last_name:c.last_name,
         age:c.age, phone: c.phone, number_children:c.number_children }));

         console.table(formattedIndividuals);}
         catch(error){
            console.log(error);
            }
}
