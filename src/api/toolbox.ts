import apiService from '@helpers/api';

const RESOURCE: string = '/toolbox';

export function getToolbox(): Promise<any> {
  return apiService.get(RESOURCE);
}
