import isObject from '../source/isObject';

describe('isObject', () => {
    test('when value is boolean', () => {
        expect(isObject(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isObject(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isObject(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isObject(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isObject('hello')).toBeFalsy();
    });
    test('when value is empty object', () => {
        expect(isObject({})).toBeTruthy();
    });
    test('when value is object with values', () => {
        expect(isObject({ a: 12 })).toBeTruthy();
    });
    test('when value is empty array', () => {
        expect(isObject([])).toBeFalsy();
    });
    test('when value is array with values', () => {
        expect(isObject([1, 2, 3, 4])).toBeFalsy();
    });
});
