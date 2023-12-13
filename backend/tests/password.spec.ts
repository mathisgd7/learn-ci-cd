import { isValidPassword } from '../routes/auth'

describe('Password strength test', () => {

	it('Positive', () => {
		expect(isValidPassword('Hello wor1d')).toBe(true);
		expect(isValidPassword('H3llo wOrld')).toBe(true);
	})
	
	it('Negative', () => {
		expect(isValidPassword('hello world')).toBe(false);
		expect(isValidPassword('43110')).toBe(false);
		expect(isValidPassword('hello')).toBe(false);
		expect(isValidPassword('hell0')).toBe(false);
		expect(isValidPassword('hello world!')).toBe(false);
	})

})