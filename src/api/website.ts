import apiService from '@helpers/api';

const RESOURCE: string = '/website';

export function getWebsite(): Promise<any> {
  return apiService.get(RESOURCE);
}
