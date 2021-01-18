export default function generateImport(pkgname: string): string {
	return `import * as ${pkgname} from "./${pkgname}"`
}
