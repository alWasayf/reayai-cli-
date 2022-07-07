import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { q4 } from '../questions/q4';
export async function addreview() {
    try{
	const { data: babysitters } = await axios.get(baseUrl + '/individual');
	const formattedBabysitters = babysitters.map((c: any) => ({ first_name: c.first_name, last_name: c.last_name,nationality:c.nationality }));
	console.table(formattedBabysitters);
    const review : String = await prompt(
        {
            type: 'input',
            name: 'review',
            message: 'Enter the review ',
        },)
        const rating : String = await prompt(
            {
                type: 'number',
                name: 'rating',
                message: 'Enter the rating ',
            },)
        const {babysitter_id} = await prompt(
            {
                type: 'number',
                name: 'babysitter_id',
                message: 'Enter the index ',
                filter: (val) => +val
            },)   

            const index = babysitters[babysitter_id]
        await axios.post(baseUrl + '/individual/individual/reviews',

        {
            reviewBabysitter_id:index.babysitter_id,
            ...review ,
            ...rating,
        },
        {
            headers: {
                token:globalData.token,
            },
        }
    );

}catch(error){
console.log(error);
}const { q1Answer } = await prompt({

type: 'list',
name: 'q1Answer',
message: 'Please choose what you want!',
choices: ['back to list home','Quit'],
});
if (q1Answer ==='back to list home') {
await q4();
}
else if (q1Answer === 'Quit'){
console.log("Bey");
process.exit(0);
}
}