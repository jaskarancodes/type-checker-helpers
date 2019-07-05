import isString from '../source/isString';

describe('isString', () => {
    test('when value is boolean', () => {
        expect(isString(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isString(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isString(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isString(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isString('hello')).toBeTruthy();
    });
    test('when value is object', () => {
        expect(isString({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isString([])).toBeFalsy();
    });
});
