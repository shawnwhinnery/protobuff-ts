import parseDir from "./parseDir"
import compilePackages from "./compilePackages"
import generateImport from "./generateImport"
import generateEnum from "./generateEnum"
import generateMessageInterface from "./generateMessageInterface"

import fs from "fs-extra"
import * as path from "path"

export default function main(protoRoot: string, outputRoot: string): any {
	return parseDir(protoRoot)
		.then(compilePackages)
		.then((packages) => {
			return packages.map((pkg) => {
				var imports = pkg.imports.map(generateImport),
					enums = pkg.enums.map(generateEnum),
					messages = pkg.messages.map(generateMessageInterface),
					code = [...imports, ...enums, ...messages].join("\r\n")
				return fs.writeFile(path.join(outputRoot, `${pkg.package}.ts`), code)
			})
		})
}
