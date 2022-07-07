import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..'; 
import { q4 } from '../questions/q4';


export async function singIndividual() {
    try{
    const singIndividualData = await prompt([
        {
            type: 'input',
            name: 'phone',
            message: 'Enter phone ',
        },
        {
            type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
        },]);

        const t= await axios.post(
            baseUrl + '/individual/singin',
            {
                ...singIndividualData,
            },
        );
         globalData.token=t.data.token
        console.log(`Individual for ${singIndividualData.first_name}, has been added ✅`);
    
        await q4();
    }catch(error){
        console.log(error);
        }
    }
    