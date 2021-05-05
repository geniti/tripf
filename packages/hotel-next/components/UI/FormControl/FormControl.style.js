import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  margin-bottom: 24px;

  .field-label {
    display: block;
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .ant-input,
  .ant-picker,
  .ant-input-number,
  .ant-input-password {
    width: 100%;
    min-height: 48px;
    border-radius: 3px;
    border-color: ${themeGet('border.3', '#E6E6E6')};
    &:focus,
    &.ant-input-focused,
    &.ant-picker-focused,
    &.ant-input-number-focused,
    &.ant-input-password-focused {
      box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);
    }
  }

  .ant-checkbox-wrapper {
    .ant-checkbox {
      + span {
        font-size: 15px;
        font-weight: 700;
        color: ${themeGet('text.0', '#2C2C2C')};
        line-height: 1;
      }
      .ant-checkbox-inner {
        border-radius: 0;
        border-color: ${themeGet('text.1', '#909090')};
      }
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: ${themeGet('primary.0', '#008489')};
          background-color: ${themeGet('primary.0', '#008489')};
        }
      }
    }
  }

  .ant-input-number {
    max-width: 100px;
    .ant-input-number-input {
      min-height: 48px;
    }
    &:hover {
      border-color: ${themeGet('border.3', '#E6E6E6')};
    }
  }
  .ant-input-number-handler:hover {
    .ant-input-number-handler-up-inner,
    .ant-input-number-handler-down-inner {
      color: ${themeGet('primary.0', '#008489')};
    }
  }

  .ant-picker {
    &:hover {
      border-color: ${themeGet('border.3', '#E6E6E6')};
    }
  }

  .ant-select {
    &.ant-select-single:not(.ant-select-customize-input) {
      width: 100%;
      .ant-select-selector {
        border-radius: 3px;
        border-color: ${themeGet('border.3', '#E6E6E6')};
        min-height: 48px;
        .ant-select-selection-search-input {
          min-height: 48px;
        }
        .ant-select-selection-item {
          display: flex;
          align-items: center;
        }
      }
    }
    &.ant-select-focused {
      &.ant-select-single:not(.ant-select-customize-input) {
        .ant-select-selector {
          box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);
        }
      }
    }
  }

  &.has-error {
    .ant-input,
    .ant-input-password {
      border-color: ${themeGet('error.0', '#F9503D')};
    }
    .feedback {
      color: ${themeGet('error.0', '#F9503D')};
    }
    .ant-input-password {
      .ant-input {
        border-color: transparent;
      }
    }
  }

  .ant-input-password {
    .ant-input {
      min-height: auto;
      border-radius: initial;
      border-color: transparent;
      &:focus {
        box-shadow: none;
      }
    }
  }

  .ant-radio-group-solid {
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
      &::before {
        content: none;
      }
      &:hover {
        color: #fff;
        &::before {
          content: none;
        }
      }
    }
    .ant-radio-button-wrapper {
      &:hover {
        color: ${themeGet('primary.0', '#008489')};
      }
    }
  }

  button[type='submit'] {
    border-radius: 3px;
    height: 47px;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    font-size: 15px;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 28px;
    padding-right: 28px;
    line-height: 1;

    &::after {
      content: none;
    }
  }
`;

export default Wrapper;
