import { q1 } from './questions/q1';
export const baseUrl = 'http://127.0.0.1:3000';
export const globalData: any = {
	token: '',
};
import chalk from 'chalk';
import figlet from 'figlet';
//export let token = '12394';

async function start(): Promise<void> {
	/// Display welcome message
	console.log();
	console.log(chalk.white.bold(figlet.textSync('Total Peace Of Mind ',{horizontalLayout:'default'})));
	console.log(chalk.white.bold(figlet.textSync('          Welcome To ',{horizontalLayout:'default'})));
	console.log(chalk.white.bold(figlet.textSync('            Reayia ',{horizontalLayout:'default'})));
	console.log('We offer a child care service in Riyadh 🤍')
	console.log();
	console.log();

	 await q1();

}
start();
