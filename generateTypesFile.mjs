import {createRequire} from "node:module"
import path from "node:path"
import fs from "node:fs/promises"

export default function() {
	return async function(vipen_session) {
		let types = ""

		const packages = [
			"@anio-fs/clean",
			"@anio-fs/file",
			"@anio-fs/is",
			"@anio-fs/mkdirp",
			"@anio-fs/remove",
			"@anio-fs/scandir"
		]

		const require = createRequire(vipen_session.getProjectRoot() + "/index.js")

		for (const pkg of packages) {
			const mod = require.resolve(pkg)
			const mod_dist_root = path.dirname(mod)
			const mod_types = path.join(mod_dist_root, "index.d.ts")

			types += `export * from "${pkg}"\n`
		}

		return types
	}
}
