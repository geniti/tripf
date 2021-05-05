import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Row, Col } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { FormTitle } from './AccountSettings.style';

export default function ChangePassWord() {
  const { control, errors, watch, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const newPassword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormTitle>Change Password</FormTitle>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="Enter old password"
              htmlFor="oldPassword"
              error={errors.oldPassword && <span>This field is required!</span>}
            >
              <Controller
                as={<Input.Password />}
                defaultValue=""
                control={control}
                id="oldPassword"
                name="oldPassword"
                rules={{ required: true }}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <FormControl
              label="Enter new password"
              htmlFor="newPassword"
              error={
                errors.newPassword && (
                  <>
                    {errors.newPassword?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.newPassword?.type === 'minLength' && (
                      <span>New password must be at lest 6 characters!</span>
                    )}
                    {errors.newPassword?.type === 'maxLength' && (
                      <span>
                        New password must not be longer than 20 characters!
                      </span>
                    )}
                  </>
                )
              }
            >
              <Controller
                as={<Input.Password />}
                defaultValue=""
                control={control}
                id="newPassword"
                name="newPassword"
                rules={{ required: true, minLength: 6, maxLength: 20 }}
              />
            </FormControl>
          </Col>
          <Col lg={24}>
            <FormControl
              label="Confirm new password"
              htmlFor="confirmPassword"
              error={
                confirmPassword &&
                newPassword !== confirmPassword && (
                  <span>Confirm password must be the same!</span>
                )
              }
            >
              <Controller
                as={<Input.Password />}
                defaultValue=""
                control={control}
                id="confirmPassword"
                name="confirmPassword"
              />
            </FormControl>
          </Col>
          <Col lg={24}>
            <div className="submit-container">
              <Button htmlType="submit" type="primary">
                Save Changes
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
}
