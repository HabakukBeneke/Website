import apiService from '@helpers/api';

const RESOURCE: string = '/resume';

export function getResume(): Promise<any> {
  return apiService.get(RESOURCE);
}
