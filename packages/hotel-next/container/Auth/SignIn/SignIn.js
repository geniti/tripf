import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInForm from './SignInForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/logo-alt.svg"
          title="TripFinder."
        />
        <Title>Welcome Back</Title>
        <TitleInfo>Please log into your account</TitleInfo>
        <SignInForm />
        <Divider>Or log in with </Divider>
        <SocialLogin />
        <Text>
          Don't Have an Account?&nbsp;
          <Link href={REGISTRATION_PAGE}>
            <a>Registration</a>
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

export default SignIn;
