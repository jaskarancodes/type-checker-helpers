const isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp;
export default isRegExp;
