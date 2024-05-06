// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number
test('Should be true for valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber(('123 456-7890'))).toBe(true);
});

test('Should be false for valid phone numbers', () => {
  expect(isPhoneNumber('fjs-vnd-ssks')).toBe(false);
  expect(isPhoneNumber('23355')).toBe(false);
});

// Emails
test('Should be true for valid emails', () => {
  expect(isEmail('ex@gmai.com')).toBe(true);
  expect(isEmail('this@is.com')).toBe(true);
});

test('Should be false for valid emails', () => {
  expect(isEmail('not email')).toBe(false);
  expect(isEmail('email@nope.123')).toBe(false);
});

// Password
test('Should be true for strong passwords', () => {
  expect(isStrongPassword('A1b2C3D4')).toBe(true);
  expect(isStrongPassword('V12dhw2Ch29')).toBe(true);
});

test('Should be false for strong passwords', () => {
  expect(isStrongPassword('abc')).toBe(false);
  expect(isStrongPassword('no')).toBe(false);
});

// Date
test('Should be true for valid dates', () => {
  expect(isDate('10/23/2004')).toBe(true);
  expect(isDate('1/2/3456')).toBe(true);
});

test('Should be false for valid dates', () => {
  expect(isDate('234/12/2003')).toBe(false);
  expect(isDate('01/02/03')).toBe(false);
});

// Hex Color
test('Should be true for valid hex colors', () => {
  expect(isHexColor('#DEF')).toBe(true);
  expect(isHexColor('#12ab3d')).toBe(true);
});

test('Should be false for valid hex colors', () => {
  expect(isHexColor('abcdeg')).toBe(false);
  expect(isHexColor('#33333')).toBe(false);
});