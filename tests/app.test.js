const { it, expect } = require("@jest/globals");
const app = require("../app");

it('should sum 2 ints passed to function', () => {
    expect(app.add(2,3)).toBe(5);
});

it('should check if return is not null', () => {
    expect(app.notNull()).toEqual("not null");
});

it.only('value should be true', () => {
    expect(app.bool(2,2)).toBe(true);
})
