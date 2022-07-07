import { prompt } from 'inquirer';
import { deleteindividual } from '../controllers/delete-individual';
import { searchBabysitter } from '../controllers/search-babysitter';
import { updateindividual } from '../controllers/update-individual';
import { viewindividual } from '../controllers/view-individual';


export async function q4() {
    const { q4Answer } = await prompt({
        type: 'list',
        name: 'q4Answer',
        message: 'Please choose an action !',
        choices: [
            '1-Edit account 🙉',
            '2-view account',
            '3-delete account 🐬',
            '4-search of babysitter by nationality ',
            //'5-view all babysitter',
            '5-Quit'
        ],
        filter: (val) => +val[0],
    });
    switch(q4Answer){
		case 1: await //createBabysitter();
                       updateindividual();
				 break;
		case 2: await viewindividual();
				 break;
		case 3 : 
             await    deleteindividual();
             break;
        case 4: await searchBabysitter();
            break;
        case 5:
			   console.log('Bey bey ✋🏻!');
				   process.exit(0);
	
		default:
				break;
	  }
}