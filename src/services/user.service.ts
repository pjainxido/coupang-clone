import { getAccessToken } from '../utils/token.util';
import { RequestService } from './request.service';

class UserService extends RequestService {
  async me() {
    const accessToken = getAccessToken();
    if (!accessToken) {
      return;
    }
    const data = await this.getRequest('/user/me', accessToken);

    return data;
  }

  async read(id: number) {
    const data = await this.getRequest('/users/' + id);
    return data;
  }
}

export default new UserService();
