export function isInteger(message: string, val: any): boolean | string  {
  return !Number.isInteger(val) && message;
}

export function isRequired(message: string, val: any): boolean | string {
  return (val === null || val === '') && message;
}
