import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Select, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import DatePicker from 'components/UI/AntdDatePicker/AntdDatePicker';
import { FormTitle } from './AccountSettings.style';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'Other' },
];
const languageOptions = [
  { label: 'English', value: 'english' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' },
  { label: 'Russian', value: 'russian' },
];

const AgentCreateOrUpdateForm = () => {
  const { control, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Fragment>
      <FormTitle>Basic Information</FormTitle>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="First name"
              htmlFor="firstName"
              error={errors.firstName && <span>This field is required!</span>}
            >
              <Controller
                as={<Input />}
                id="firstName"
                name="firstName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <FormControl
              label="Last name"
              htmlFor="lastName"
              error={errors.lastName && <span>This field is required!</span>}
            >
              <Controller
                as={<Input />}
                id="lastName"
                name="lastName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="Date of birth"
              htmlFor="dateOfBirthday"
              error={
                errors.dateOfBirthday && <span>This field is required!</span>
              }
            >
              <Controller
                as={<DatePicker />}
                id="dateOfBirthday"
                name="dateOfBirthday"
                defaultValue=""
                control={control}
                rules={{ required: true }}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <Row gutter={30}>
              <Col md={12}>
                <FormControl
                  label="I am"
                  htmlFor="agentGender"
                  error={
                    errors.agentGender && <span>This field is required!</span>
                  }
                >
                  <Controller
                    as={<Select options={genderOptions} />}
                    id="agentGender"
                    name="agentGender"
                    defaultValue={'male'}
                    control={control}
                    rules={{ required: true }}
                  />
                </FormControl>
              </Col>
              <Col md={12}>
                <FormControl
                  label="Preferred Language"
                  htmlFor="preferredLanguage"
                  error={
                    errors.preferredLanguage && (
                      <span>This field is required!</span>
                    )
                  }
                >
                  <Controller
                    as={<Select options={languageOptions} />}
                    id="preferredLanguage"
                    name="preferredLanguage"
                    defaultValue={'english'}
                    control={control}
                    rules={{ required: true }}
                  />
                </FormControl>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="Email address"
              htmlFor="email"
              error={
                errors.email && (
                  <>
                    {errors.email?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span>Please enter a valid email address!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                as={<Input />}
                type="email"
                id="email"
                name="email"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                }}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <FormControl
              label="Phone number"
              htmlFor="phoneNumber"
              error={
                errors.phoneNumber && (
                  <>
                    {errors.phoneNumber?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.phoneNumber?.type === 'pattern' && (
                      <span>Please enter your valid number!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                as={<Input />}
                id="phoneNumber"
                name="phoneNumber"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]*$/,
                }}
              />
            </FormControl>
          </Col>
          <Col lg={24}>
            <FormControl
              label="Where you live"
              htmlFor="address"
              error={errors.address && <span>This field is required!</span>}
            >
              <Controller
                as={<Input />}
                id="address"
                name="address"
                defaultValue=""
                control={control}
                rules={{ required: true }}
              />
            </FormControl>
          </Col>
          <Col lg={24}>
            <FormControl
              label="Describe Yourself (Optional)"
              htmlFor="describeYourself"
            >
              <Controller
                as={<Input.TextArea rows={5} />}
                id="describeYourself"
                name="describeYourself"
                defaultValue=""
                control={control}
              />
            </FormControl>
          </Col>
        </Row>
        <div className="submit-container">
          <Button htmlType="submit" type="primary">
            Save Changes
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AgentCreateOrUpdateForm;
