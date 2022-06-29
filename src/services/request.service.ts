import axios, { AxiosRequestHeaders } from 'axios';

export default class RequestService {
  async getHostAPI(route: string, token?: string, customHeader?: AxiosRequestHeaders) {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + route,
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

  async postHostAPI(route: string, body: any, token?: string, customHeader?: AxiosRequestHeaders) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + route,
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
