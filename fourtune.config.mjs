import generateTypesFile from "./generateTypesFile.mjs"
import generateIndexFile from "./generateIndexFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"types.d.ts": generateTypesFile(),
		"index.mjs": generateIndexFile()
	}
}
