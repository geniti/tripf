import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormWrapper = styled.div`
  width: 43%;
  padding: 81px;
  @media (min-width: 1441px) {
    padding: 130px;
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    padding: 56px;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 30px;
  }

  .signin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 57px;
    font-size: 17px;
    font-weight: 700;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    svg {
      width: 18px;
      height: 18px;
      margin-right: 2px;
    }
    &::after {
      content: none;
    }
    &:hover,
    &:focus {
      border-color: #008489d1;
      background-color: #008489d1;
    }
  }

  .ant-divider {
    margin: 41px 0 !important;
    .ant-divider-inner-text {
      font-size: 15px;
      font-weight: 700;
      color: ${themeGet('text.2', '#777777')};
    }
  }

  .ant-btn {
    &.facebook-btn,
    &.github-btn,
    &.firebase-btn,
    &.google-btn {
      height: 57px;
      border-radius: 3px;
      font-size: 15px;
      font-weight: 700;
      &::after {
        content: none;
      }
    }
    &.facebook-btn {
      border-color: ${themeGet('color.7', '#3b5998')};
      background-color: ${themeGet('color.7', '#3b5998')};
    }
    &.github-btn {
      border-color: ${themeGet('color.14', '#00ACEE')};
      background-color: ${themeGet('color.14', '#00ACEE')};
    }
    &.firebase-btn {
      border-color: ${themeGet('color', '#FFCB2B')};
      background-color: ${themeGet('color', '#FFCB2B')};
    }
    &.google-btn {
      border-color: ${themeGet('color.10', '#dd4b39')};
      background-color: ${themeGet('color.10', '#dd4b39')};
    }
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  > a {
    color: ${themeGet('primary.0', '#008489')};
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    &:hover,
    &:focus {
      outline: none;
      color: #008489d1;
      text-decoration: none;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  .field-container {
    .ant-form-item {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  .ant-switch {
    min-width: 36px;
    height: 21px;
    &.ant-switch-checked {
      background-color: ${themeGet('primary.0', '#008489')};
    }
    &::after {
      width: 17px;
      height: 17px;
    }
    &:focus {
      box-shadow: none;
    }
    .ant-click-animating-node {
      display: none;
    }
  }
`;

export const Label = styled.span`
  font-size: 15px;
  line-height: 1;
  font-weight: 700;
  color: ${themeGet('text.0', '#2C2C2C')};
  padding: 0 8px;
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 45px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 58px;
  @media (max-width: 1600px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 1200px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const TitleInfo = styled.p`
  color: ${themeGet('text.2', '#777777')};
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 45px;
  margin-top: 10px;
  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: ${themeGet('text.2', '#777777')};
  line-height: 1;
  a {
    color: ${themeGet('primary.0', '#008489')};
    &:hover,
    &:focus {
      outline: none;
      color: #008489d1;
      text-decoration: none;
    }
  }
`;

export const BannerWrapper = styled.div`
  width: 57%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #e9e8ec;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export default Wrapper;
