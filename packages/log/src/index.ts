import "colors";

const info = (val: string) => {
	console.log("INFO   : ".cyan.bold, val);
};

const warning = (val: string) => {
	console.log("WARNING: ".yellow.bold, val);
};

const error = (val: string) => {
	console.error("ERROR  : ".inverse.red.bold, val);
};

const success = (val: string) => {
	console.log("SUCCESS: ".inverse.green.bold, val);
};

const log = (val: string) => {
	console.log(val.dim);
};

export { error, info, log, success, warning };
