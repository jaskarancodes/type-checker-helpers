import isSymbol from '../source/isSymbol';

describe('isSymbol', () => {
    test('when value is symbol', () => {
        const testSymbol = Symbol('test');
        expect(isSymbol(testSymbol)).toBeTruthy();
    });
    test('when value is boolean', () => {
        expect(isSymbol(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isSymbol(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isSymbol(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isSymbol(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isSymbol('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isSymbol({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isSymbol([])).toBeFalsy();
    });
});
