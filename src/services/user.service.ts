import cookies from 'js-cookie';

import RequestService from './request.service';

class UserService extends RequestService {
  async me() {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return;
    }
    const data = await this.getHostAPI('/user/me', accessToken);

    return data;
  }

  async read(id: number) {
    const data = await this.getHostAPI('/users/' + id);
    return data;
  }
}

export default new UserService();
