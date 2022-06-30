import axios, { AxiosRequestHeaders } from 'axios';

export class RequestService {
  baseUrl = process.env.NEXT_PUBLIC_API_HOST;
  constructor(baseUrl?: string) {
    if (baseUrl) this.baseUrl = baseUrl;
  }

  async getRequest(route: string, token?: string, customHeader?: AxiosRequestHeaders) {
    const { data } = await axios.get(
      this.baseUrl + route,
      token
        ? {
            headers: {
              ...customHeader,
              Authorization: `Bearer ${token}`,
            },
          }
        : customHeader
    );
    return data;
  }

  async postRequest(route: string, body: any, token?: string, customHeader?: AxiosRequestHeaders) {
    const { data } = await axios.post(
      this.baseUrl + route,
      body,
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : customHeader
    );
    return data;
  }
}

export default new RequestService();
