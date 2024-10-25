import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import mockInterceptor from '../../../src/helpers/mockInterceptor';

describe('mockInterceptor', () => {
  it('should intercept and log the request', async () => {
    const consoleLogSpy = vi.spyOn(console, 'log');

    const axiosGetSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { success: true },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    await mockInterceptor.get('https://example.com/test');

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Intercepting request:')
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Header and url:')
    );


    consoleLogSpy.mockRestore();
    axiosGetSpy.mockRestore();
  });

  it('should reject if there is a request error', async () => {
    const axiosGetSpy = vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Request error'));

    try {
      await mockInterceptor.get('https://example.com/fail');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Request error');
    }

    axiosGetSpy.mockRestore();
  });
});
