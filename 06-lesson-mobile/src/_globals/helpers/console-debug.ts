export function CONSOLE_DEBUG(message: string, data: any, isDefault = false) {
  isDefault
    ? console.log(data)
    : console.log(`${message} =>`, JSON.stringify(data, null, 2));
}
