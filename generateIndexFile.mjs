export default function() {
	return async function(vipen_session) {
		let code = ""

		const packages = [
			"@anio-fs/clean",
			"@anio-fs/file",
			"@anio-fs/is",
			"@anio-fs/mkdirp",
			"@anio-fs/remove",
			"@anio-fs/scandir"
		]

		for (const pkg of packages) {
			code += `export * from "${pkg}"\n`
		}

		return code
	}
}
