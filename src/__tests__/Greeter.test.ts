import {Greeter } from '../index';

test("My greeter", () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
})