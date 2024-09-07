export function dateFormatter(value: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
        day: "2-digit",
    })?.format(new Date(value))
}