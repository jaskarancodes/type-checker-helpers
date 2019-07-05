import isNull from '../source/isNull';

describe('isNull', () => {
    test('when value is boolean', () => {
        expect(isNull(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isNull(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isNull(null)).toBeTruthy();
    });
    test('when value is number', () => {
        expect(isNull(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isNull('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isNull({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isNull([])).toBeFalsy();
    });
});
