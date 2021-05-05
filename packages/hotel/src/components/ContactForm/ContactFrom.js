import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Checkbox, Button, Row, Col } from 'antd';
import FormControl from '../UI/FormControl/FormControl';

const ContactForm = () => {
  const { control, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Your message"
        htmlFor="message"
        error={errors.message && <span>This field is required!</span>}
      >
        <Controller
          as={<Input.TextArea rows={5} />}
          id="message"
          name="message"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <Row gutter={30}>
        <Col md={12}>
          <FormControl
            label="Your email"
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
        <Col md={12}>
          <FormControl
            label="Your contact number"
            htmlFor="phone"
            error={
              errors.phone && (
                <>
                  {errors.phone?.type === 'required' && (
                    <span>This field is required!</span>
                  )}
                  {errors.phone?.type === 'pattern' && (
                    <span>Please enter your valid number!</span>
                  )}
                </>
              )
            }
          >
            <Controller
              as={<Input />}
              defaultValue=""
              control={control}
              id="phone"
              name="phone"
              rules={{ required: true, pattern: /^[0-9]*$/ }}
            />
          </FormControl>
        </Col>
      </Row>
      <FormControl>
        <Controller
          name="cookie"
          onChange={([e]) => {
            return e.target.checked;
          }}
          as={
            <Checkbox>
              Save my email in the browser fro the next time I contact
            </Checkbox>
          }
          control={control}
        />
      </FormControl>
      <FormControl>
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default ContactForm;
