import fs from "fs-extra"
import parser from "protocol-buffers-schema"
import * as path from "path"
import { Schema } from "./types"
function isProtoFile(filename: string, i: number) {
	return filename.slice(filename.length - 6) === ".proto"
}
export default function parseDir(baseDir: string): Promise<Schema[]> {
	return fs.readdir(baseDir).then((dir) => {
		var files = dir.filter(isProtoFile)
		return Promise.all(
			files.map((filename: string) => {
				return fs
					.readFile(path.resolve(baseDir, filename))
					.then((buff) => buff.toString())
			})
		).then((schemas) => {
			return schemas.map(parser.parse).map((schema: any, i) => {
				return { file: files[i], ...schema }
			})
		})
	})
}
