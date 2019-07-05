import isFunction from '../source/isFunction';

describe('isFunction', () => {
    test('when value is function', () => {
        const fn = val => val;
        expect(isFunction(fn)).toBeTruthy();
    });
    test('when value is boolean', () => {
        expect(isFunction(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isFunction(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isFunction(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isFunction(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isFunction('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isFunction({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isFunction([])).toBeFalsy();
    });
});
