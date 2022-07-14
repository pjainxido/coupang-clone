import styled from '@emotion/styled';
import Link from 'next/link';
import Button from '../../src/components/common/Button';
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
        <Button type='submit'>로그인</Button>
        <Link href='/auth/signup'>
          <Button>
            <a>회원가입</a>
          </Button>
        </Link>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 290px;
  max-width: 460px;
  margin: 0 auto;
`;
