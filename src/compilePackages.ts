import { Schema } from "./types"
export default function compilePackages(schemas: Schema[]) {
	var packages = {}
	schemas.forEach((s, i) => {
		packages[s.package] = packages[s.package] || {
			package: s.package,
			file: s.file,
			enums: [],
			messages: [],
			imports: []
		}

		packages[s.package].imports = [
			...packages[s.package].imports,
			...s.imports.map((file) => {
				var found = schemas.find((s) => s.file === file).package
				return found
			})
		]

		packages[s.package].enums = [...packages[s.package].enums, ...s.enums]

		packages[s.package].messages = [
			...packages[s.package].messages,
			...s.messages
		]

	})
    return Object.keys(packages).map(name => packages[name])
}
