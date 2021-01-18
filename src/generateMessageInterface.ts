// const NUMBER = "number"
import { Field, type_map } from "./types"
function compileInterfaceField({
	name,
	type,
	tag,
	map,
	oneof,
	required,
	repeated,
	options
}: Field) {
	var _type = type_map[type] ? type_map[type] : type,
		_required = required ? "" : "?",
		_repeated = repeated ? "[]" : ""

	return `        ${name}${_required}:${_type}${_repeated}`
}

export default function generateMessageInterface({ name, fields }) {
	return [
		`export interface ${name} {`,
		fields.map(compileInterfaceField).join("\n"),
		"}\n"
	].join("\n")
}
