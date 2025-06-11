import { describe, it, expect, vi } from 'vitest';
import { run } from './main';

describe('run', () => {
  it('should display the correct message in the console', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    run();
    expect(logSpy).toHaveBeenCalledWith('Hello World, the project is running!');
    logSpy.mockRestore();
  });
});
