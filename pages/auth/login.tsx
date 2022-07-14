import styled from '@emotion/styled';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = () => {};

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <input {...register('password')} />
        <button type='submit'>로그인</button>
        <Link href='/auth/signup'>
          <a>회원가입</a>
        </Link>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
