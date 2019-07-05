import isUndefined from '../source/isUndefined';

describe('isUndefined', () => {
    test('when value is boolean', () => {
        expect(isUndefined(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isUndefined(undefined)).toBeTruthy();
    });
    test('when value is null', () => {
        expect(isUndefined(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isUndefined(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isUndefined('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isUndefined({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isUndefined([])).toBeFalsy();
    });
});
