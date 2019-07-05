import isBoolean from '../source/isBoolean';

describe('isBoolean', () => {
    test('when value is boolean', () => {
        expect(isBoolean(true)).toBeTruthy();
    });
    test('when value is undefined', () => {
        expect(isBoolean(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isBoolean(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isBoolean(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isBoolean('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isBoolean({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isBoolean([])).toBeFalsy();
    });
});
