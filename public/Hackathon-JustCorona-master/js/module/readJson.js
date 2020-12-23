import { fs } from "fs";

export const readJson = async () => {
	const url = '../../assets/expectedResult.json';
	let res;
	await fs.readFile(url, function(err, data)=> {
		res = data;
	});
	
	return res;
};