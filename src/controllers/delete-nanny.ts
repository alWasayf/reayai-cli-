import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function  deleteappointment(){
	const { data: appointments } = await axios.get(baseUrl + '/individual/babySitter/appointments/view'
	,{
		headers: {
			token:globalData.token,
		}});
	const formattedAppointments = appointments.map((c: any) => ({ appointments:c.data }));
	console.table(formattedAppointments);
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const  appointment= appointments[index];
	await axios.delete(baseUrl + `/individual/appointments/${appointment.id}`);
	
	console.log(`appointment for ${ appointment.id} has been deleted ✅`);


}