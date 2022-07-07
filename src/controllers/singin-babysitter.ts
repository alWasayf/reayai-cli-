import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData} from '..'; 
import { q6 } from '../questions/q6';


export async function singBabysitter() {
    const singbabysitterData = await prompt([
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

        await axios.post(
            baseUrl + '/babysitter/login',
            {
                ...singbabysitterData,
            },
            {
                headers: {
                 token:globalData.token,
               },
            }
        );
    
        console.log(`babysitter for ${singbabysitterData.first_name}, has been added ✅`);
        q6();
    }