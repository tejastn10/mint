const esbuild = require("esbuild");

const main = async () => {
	const result = await esbuild.build({
		color: true,
		bundle: true,
		target: "es2022",
		platform: "node",
		tsconfig: "./tsconfig.json",
		outfile: "./dist/server.js",
		entryPoints: ["./src/server.ts"],
		// watch: {
		//   onRebuild(error, result) {
		//     if (error) console.error('watch build failed:', error)
		//     else console.log('watch build succeeded:', result)
		//   },
		// },
	});

	console.log("result", result);
};

main();
