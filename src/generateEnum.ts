import { Enum } from "./types"
export default function compileEnum(enm: Enum) {
	return [
		`export enum ${enm.name} {`,
		Object.keys(enm.values)
			.map((key) => {
				return `    ${key} = ${enm.values[key].value}`
			})
			.join(",\n"),
		"}\n"
	].join("\n")
}
