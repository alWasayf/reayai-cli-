import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData} from '..';
import { q6 } from '../questions/q6';

export async function createBabysitter() {
    const babysittersData = await prompt([
        {
            type: 'input',
            name: 'first name',
            message: 'Enter first name ',
        },
        {
            type: 'input',
            name: 'last name',
            message: 'Enter last name ',
        },
        {
            type: 'input',
            name: 'age',
            message: ' Enter  age  ',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Enter phone number',
        },
        {
            type: 'input',
            name: ' nationality',
            message: 'Enter nationality',
        },
        {
            type: 'input',
            name: 'skills',
            message: 'Enter skills',
        },
        {
            type: 'input',
            name: ' hourly price',
            message: 'Enter  hourly price',
        },
        {
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
    ]);

    
	await axios.put(
		baseUrl + '/babySitters',
		{
			...babysittersData,
		},
        {
            headers: {
             token:globalData.token,
           },
        }
	);

	console.log(`babysitter for ${babysittersData.first_name}, has been added ✅`);
    q6();
}