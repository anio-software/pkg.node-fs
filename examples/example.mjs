import {hashFileSync, readFileInChunksSync} from "../products/project/dist/default/index.mjs"

console.log(
	hashFileSync("./package.json", "sha1"),
	readFileInChunksSync("./package.json", 512)
)
