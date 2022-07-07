import axios from 'axios';
import { prompt } from 'inquirer';
import { addappointment } from '../controllers/add-nanny';
import { deleteappointment } from '../controllers/delete-nanny';


export async function q5() {
    const { q5Answer } = await prompt({
        type: 'list',
        name: 'q5Answer',
        message: 'Please choose an action !',
        choices: [
            '1-Add appointment 🙉',
            '2-cancel appointment',
            //'4-view all appointment ',
            '3-Quit ✋🏻'
        ],
        filter: (val) => +val[0],
    });
    switch(q5Answer){
		case 1: await //createBabysitter();
                      addappointment();
				 break;
		case 2: await deleteappointment();
				 break;
		case 3 : 
			   console.log('Bey bey!');
				   process.exit(0);
		default:
				break;
	  }
}