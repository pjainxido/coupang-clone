import { getRefreshToken, setAuthTokens } from '../utils/token.util';

import { RequestService } from './request.service';

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

export class AuthService extends RequestService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      return;
    }

    const data = await this.postRequest('/auth/refresh', null, refreshToken);
    setAuthTokens(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const data = await this.postRequest('/auth/signup', {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    setAuthTokens(data.acess, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const data = await this.postRequest('/auth/signup', {
      email,
      password,
    });

    setAuthTokens(data.access, data.refresh);
  }
}

export default new AuthService();
