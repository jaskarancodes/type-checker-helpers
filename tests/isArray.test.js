import isArray from '../source/isArray';

describe('isArray', () => {
    test('when value is boolean', () => {
        expect(isArray(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isArray(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isArray(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isArray(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isArray('hello')).toBeFalsy();
    });
    test('when value is empty object', () => {
        expect(isArray({})).toBeFalsy();
    });
    test('when value is object with values', () => {
        expect(isArray({ a: 12 })).toBeFalsy();
    });
    test('when value is empty array', () => {
        expect(isArray([])).toBeTruthy();
    });
    test('when value is array with values', () => {
        expect(isArray([1, 2, 3, 4])).toBeTruthy();
    });
});
