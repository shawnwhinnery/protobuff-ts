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
	var _required = required ? "" : "?",
		_type = type_map[type] || type
	
	if(Array.isArray(_type)) {
		if(repeated) _type = _type.map(t => t+'[]')
		_type = _type.join(" | ")
	} else {
		if(repeated) _type += "[]"
	}

	return `        ${name}${_required}:${_type}`
}

export default function generateMessageInterface({ name, fields }) {
	return [
		`export interface ${name} {`,
		fields.map(compileInterfaceField).join("\n"),
		"}\n"
	].join("\n")
}
