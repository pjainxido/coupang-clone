import axios from 'axios';
import cookies from 'js-cookie';

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

export class AuthService {
  setToken(accessToken: string, refreshToken: string) {
    cookies.set('accessToken', accessToken, { expires: 1 });
    cookies.set('refreshToken', refreshToken, { expires: 7 });
  }

  async getWithAuthorization(route: string, token?: string) {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + route,
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : undefined
    );
    return data;
  }

  async postWithAuthorization(route: string, body: any, token?: string) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + route,
      body,
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : undefined
    );
    return data;
  }
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get('refreshToken');
    if (!refreshToken) {
      return;
    }

    const data = await this.postWithAuthorization('/auth/refresh', null, refreshToken);
    this.setToken(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const data = await this.postWithAuthorization('/auth/signup', {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setToken(data.access, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const data = await this.postWithAuthorization('/auth/signup', {
      email,
      password,
    });

    this.setToken(data.access, data.refresh);
  }
}

export default new AuthService();
