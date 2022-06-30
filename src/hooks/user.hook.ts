import { useQuery } from 'react-query';
import UserService from '../services/user.service';

export const useUserMe = () => {
  return useQuery('me', UserService.me, {
    refetchInterval: 500,
  });
};

export const useUserRead = (userID: number) => {
  return useQuery(['read', userID], async () => await UserService.read(userID));
};
