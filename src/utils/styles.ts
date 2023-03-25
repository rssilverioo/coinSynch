type Class = string | undefined | null | false;

export function stylesEntry(classes: Class[]) {
	return classes.filter((item) => !!item).join(" ");
}
