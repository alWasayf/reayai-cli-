import { prompt } from 'inquirer';
import { addreview } from '../controllers/add-review';
import { deletereview } from '../controllers/delete-review';
import { viewareview } from '../controllers/view-reviw';


export async function q6() {
    const { q6Answer } = await prompt({
        type: 'list',
        name: 'q6Answer',
        message: 'Please choose an action !',
        choices: [
            '1-add review 🙉',
            '2-view review',
            '3-delete review ',
            '4-Quit ✋🏻'
        ],
        filter: (val) => +val[0],
    });
    switch(q6Answer){
		case 1: await //createBabysitter();
                     addreview();
				 break;
		case 2: await viewareview();
				 break;
        case 3:
            await deletereview();
		case 4 : 
			   console.log('Bey bey!');
				   process.exit(0);
		default:
				break;
	  }
}