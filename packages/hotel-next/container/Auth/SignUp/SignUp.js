import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { LOGIN_PAGE } from 'settings/constant';
import SignUpForm from './SignUpForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';

const SignUp = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/logo-alt.svg"
          title="TripFinder."
        />
        <Title>Welcome To TripFinder</Title>
        <TitleInfo>Please Register for your account</TitleInfo>
        <SignUpForm />
        <Divider>Or Register Up With </Divider>
        <SocialLogin />
        <Text>
          Already Have an Account! &nbsp;
          <Link href={LOGIN_PAGE}>
            <a>Login</a>
          </Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <Image
          src="/images/login-page-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Auth banner"
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignUp;
