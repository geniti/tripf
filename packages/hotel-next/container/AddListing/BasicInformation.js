import React, { useState, useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, InputNumber, Button } from 'antd';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import FormControl from 'components/UI/FormControl/FormControl';
import AddListingAction from './AddListingAction';
import { FormHeader, Title, FormContent, FormAction } from './AddListing.style';

const BasicInformation = ({ setStep }) => {
  const { action, state } = useStateMachine(AddListingAction);
  const { control, register, errors, setValue, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState({
    guest: 0,
    bed: 0,
  });
  useEffect(() => {
    register({ name: 'guest' }, { required: true });
    register({ name: 'bed' }, { required: true });
  }, [register]);

  const handleOnChange = (key) => (event) => {
    setQuantity({
      ...quantity,
      [key]: event.target.value,
    });
    setValue([key], event.target.value);
  };

  const handleIncrement = (key) => {
    setQuantity({
      ...quantity,
      [key]: ++quantity[key],
    });
    setValue([key], ++quantity[key]);
  };

  const handleDecrement = (key) => {
    if (quantity[key] <= 0) {
      return false;
    }
    setQuantity({
      ...quantity,
      [key]: --quantity[key],
    });
    setValue([key], --quantity[key]);
  };

  const onSubmit = (data) => {
    action(data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>Step 1: Start with the basics</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="Hotel Name"
              htmlFor="hotelName"
              error={errors.hotelName && <span>This field is required!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="Write your hotel name here"
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
          <Col sm={12}>
            <FormControl
              label="Price Per Night (USD)"
              htmlFor="pricePerNight"
              error={
                errors.pricePerNight && (
                  <>
                    {errors.pricePerNight?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.pricePerNight?.type === 'pattern' && (
                      <span>Please enter only number!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                as={<InputNumber />}
                id="pricePerNight"
                name="pricePerNight"
                defaultValue={state.data.pricePerNight}
                control={control}
                placeholder="00.00"
                rules={{
                  required: true,
                  pattern: /^[0-9]*$/,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="Hotel Description"
          htmlFor="hotelDescription"
          error={
            errors.hotelDescription && <span>This field is required!</span>
          }
        >
          <Controller
            as={<Input.TextArea rows={5} />}
            id="hotelDescription"
            name="hotelDescription"
            defaultValue={state.data.hotelDescription}
            control={control}
            placeholder="Tell people about your hotel, room, location & amenities"
            rules={{
              required: true,
            }}
          />
        </FormControl>
        <FormControl
          label="How many guests can your hotel accommodate?"
          error={errors.guest && <span>This field is required!</span>}
        >
          <InputIncDec
            name="guest"
            value={quantity.guest}
            onChange={handleOnChange('guest')}
            increment={() => handleIncrement('guest')}
            decrement={() => handleDecrement('guest')}
          />
        </FormControl>
        <FormControl
          label="How many beds can guests use?"
          error={errors.bed && <span>This field is required!</span>}
        >
          <InputIncDec
            name="bed"
            value={quantity.bed}
            onChange={handleOnChange('bed')}
            increment={() => handleIncrement('bed')}
            decrement={() => handleDecrement('bed')}
          />
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default BasicInformation;
