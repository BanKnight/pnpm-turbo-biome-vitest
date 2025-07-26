import { describe, it, expect } from 'vitest';
import { add, formatGreeting } from './index';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('formatGreeting function', () => {
  it('should format a greeting correctly', () => {
    expect(formatGreeting('World')).toBe('Hello, World! Welcome to the ultimate template.');
  });
});