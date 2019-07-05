import isNumber from '../source/isNumber';

describe('isNumber', () => {
    test('when value is boolean', () => {
        expect(isNumber(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isNumber(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isNumber(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isNumber(4)).toBeTruthy();
    });
    test('when value is string', () => {
        expect(isNumber('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isNumber({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isNumber([])).toBeFalsy();
    });
});
