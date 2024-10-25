import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiService } from '@helpers/api';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService('https://api.com');
    vi.stubEnv('MODE', 'development');
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });

  describe('Constructor', () => {
    it('should be defined', () => {
      expect(apiService).toBeDefined();
    });

    it('should create an axios instance with the correct base URL and headers', () => {
      expect(apiService.axiosInstance.defaults.baseURL).toBe('https://api.com');
      expect(apiService.axiosInstance.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('should create an axios instance in dev mode', () => {
      const service = new ApiService('https://api.com');
      expect(service.axiosInstance.interceptors).toBeDefined();
    });
  });

  describe('API Methods', () => {
    it('should call axiosInstance.get with the correct URL and config', async () => {
      const fakeResponse = { data: { message: 'Fake data response' } };
      const spy = vi.spyOn(apiService.axiosInstance, 'get').mockResolvedValueOnce(fakeResponse);
      await apiService.get('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data', undefined);
    });

    it('should call axiosInstance.post with the correct URL and config', async () => {
      const fakeResponse = { data: { message: 'Fake post response' } };
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService.axiosInstance, 'post').mockResolvedValueOnce(fakeResponse);
      await apiService.post('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data, undefined);
    });

    it('should call axiosInstance.put with the correct URL and config', async () => {
      const fakeResponse = { data: { message: 'Fake post response' } };
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService.axiosInstance, 'put').mockResolvedValueOnce(fakeResponse);
      await apiService.put('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data, undefined);
    });

    it('should call axiosInstance.delete with the correct URL and config', async () => {
      const fakeResponse = { data: { message: 'Fake post response' } };
      const spy = vi.spyOn(apiService.axiosInstance, 'delete').mockResolvedValueOnce(fakeResponse);
      await apiService.delete('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data', undefined);
    });
  });
});
