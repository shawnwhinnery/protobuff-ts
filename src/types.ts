interface EnumValue {
	name: string
	value: any
}
interface EnumValues {
	[i: string]: EnumValue
}
export interface Enum {
	name: SVGStringList
	values: EnumValues
}
export interface Message {
	name: string
	fields: Field[]
	enums: Enum[]
	messages: Message[]
	options: any
}

interface SchemaOptions {
	java_package: string
	java_outer_classname: string
}

export interface Schema {
	package: string
	file: string
	enums: Enum[]
	messages: Message[]
	imports: string[]
	options: SchemaOptions
}

export const type_map = {
	fixed32: "number",
	fixed64: "number",
	sfixed32: "number",
	sfixed64: "number",
	sint32: "number",
	sint64: "number",
	double: "number",
	float: "number",
	int32: "number",
	uint32: "number",
	int64: "number",
	uint64: "number",
	bool: "boolean",
	string: "string",
	bytes: ["ArrayBufferLike", "string"]
}

export interface Field {
	tag: number
	map: string
	oneof: string
	required: boolean
	repeated: boolean
	options: any
	name: string
	type: any
}
