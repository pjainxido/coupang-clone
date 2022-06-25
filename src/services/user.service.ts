import cookies from 'js-cookie';

import { AuthService } from './auth.service';

class UserService extends AuthService {
  async me() {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return;
    }
    const data = await this.getWithAuthorization('/user/me', accessToken);

    return data;
  }

  async read(id: number) {
    const data = await this.getWithAuthorization('/users/' + id);
    return data;
  }
}

export default new UserService();
