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

enum types {
	"fixed32",
	"fixed64",
	"sfixed32",
	"sfixed64",
	"sint32",
	"sint64",
	"double",
	"float",
	"int32",
	"uint32",
	"int64",
	"uint64",
	"bool",
	"string",
	"bytes"
}

export const type_map = {
	[types["fixed32"]]: "number",
	[types["fixed64"]]: "number",
	[types["sfixed32"]]: "number",
	[types["sfixed64"]]: "number",
	[types["sint32"]]: "number",
	[types["sint64"]]: "number",
	[types["double"]]: "number",
	[types["float"]]: "number",
	[types["int32"]]: "number",
	[types["uint32"]]: "number",
	[types["int64"]]: "number",
	[types["uint64"]]: "number",
	[types["bool"]]: "boolean",
	[types["string"]]: "string",
	[types["bytes"]]: ["ArrayBufferLike", "Uint8Array", "string"]
}

export interface Field {
	tag: number
	map: string
	oneof: string
	required: boolean
	repeated: boolean
	options: any
	name: string
	type: types
}
