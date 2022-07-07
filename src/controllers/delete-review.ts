import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deletereview(){
	const { data: reviews } = await axios.get(baseUrl + 'individual/babysitter/reviews/');
	const formattedReviews = reviews.map((c: any) => ({  review: c.review }));
	console.table(formattedReviews);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const  review = reviews[index];
	await axios.delete(baseUrl + `/babysindividual/reviews/${review.id}`);
	console.log(`Individual for ${ review.review} has been deleted ✅`);
}