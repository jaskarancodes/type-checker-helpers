import isRegExp from '../source/isRegExp';

describe('isRegExp', () => {
    test('when value is reg exp', () => {
        const testRegEx = RegExp('foo*');
        expect(isRegExp(testRegEx)).toBeTruthy();
    });
    test('when value is boolean', () => {
        expect(isRegExp(true)).toBeFalsy();
    });
    test('when value is undefined', () => {
        expect(isRegExp(undefined)).toBeFalsy();
    });
    test('when value is null', () => {
        expect(isRegExp(null)).toBeFalsy();
    });
    test('when value is number', () => {
        expect(isRegExp(4)).toBeFalsy();
    });
    test('when value is string', () => {
        expect(isRegExp('hello')).toBeFalsy();
    });
    test('when value is object', () => {
        expect(isRegExp({})).toBeFalsy();
    });
    test('when value is array', () => {
        expect(isRegExp([])).toBeFalsy();
    });
});
