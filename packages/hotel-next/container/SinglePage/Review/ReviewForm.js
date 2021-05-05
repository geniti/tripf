import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Rate, Checkbox, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import RadioGroup from 'components/UI/RadioGroup/RadioGroup';
import DragAndDropUploader from 'components/UI/ImageUploader/DragAndDropUploader';
import { Form, Label, GroupTitle, Description } from './Review.style';

const ReviewForm = () => {
  const { control, register, errors, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      reviewPhotos: [
        {
          uid: '1',
          name: 'hotel-1.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '2',
          name: 'hotel-2.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '3',
          name: 'hotel-3.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
  });
  useEffect(() => {
    register({ name: 'reviewPhotos' });
  }, [register]);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Overall Rating"
        htmlFor="ratings"
        error={errors.ratings && <span>This field is required!</span>}
      >
        <Controller
          as={<Rate />}
          id="ratings"
          name="ratings"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Title of your review"
        htmlFor="reviewTitle"
        error={errors.reviewTitle && <span>This field is required!</span>}
      >
        <Controller
          as={<Input />}
          id="reviewTitle"
          name="reviewTitle"
          defaultValue=""
          control={control}
          placeholder="Summarize your visit  or highlight an interesting details"
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Details of your review"
        htmlFor="reviewDetails"
        error={errors.reviewDetails && <span>This field is required!</span>}
      >
        <Controller
          as={<Input.TextArea rows={5} />}
          id="reviewDetails"
          name="reviewDetails"
          defaultValue=""
          control={control}
          placeholder="Tell people about your experience: your room, location, amenities?"
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="What Sort of trip was this?"
        htmlFor="tripType"
        error={errors.tripType && <span>This field is required!</span>}
      >
        <Controller
          as={<RadioGroup />}
          id="tripType"
          name="tripType"
          defaultValue=""
          control={control}
          buttonStyle="solid"
          size="large"
          options={[
            { label: 'Business', value: 'business' },
            { label: 'Couples', value: 'couple' },
            { label: 'Family', value: 'family' },
            { label: 'Friends', value: 'friend' },
            { label: 'Solo', value: 'solo' },
          ]}
          onChange={([e]) => {
            return e.target.value;
          }}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl className="optional-section">
        <GroupTitle>
          Could You Say a Little More About It? <span>(optional)</span>
        </GroupTitle>
        <Description>
          We'd love your opinion ! Anything you can share will help other
          travelers choose their perfect hotel . Thanks
        </Description>
      </FormControl>
      <FormControl className="radio-group-area">
        <Row>
          <Col lg={8}>
            <Label>Is this a quaint hotel?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              as={<RadioGroup />}
              id="quaint"
              name="quaint"
              defaultValue=""
              control={control}
              buttonStyle="solid"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Not Sure', value: 'not-sure' },
              ]}
              onChange={([e]) => {
                return e.target.value;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Does this hotel offer rooms with great views?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              as={<RadioGroup />}
              id="roomViews"
              name="roomViews"
              defaultValue=""
              control={control}
              buttonStyle="solid"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Not Sure', value: 'not-sure' },
              ]}
              onChange={([e]) => {
                return e.target.value;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Does this hotel have an indoor pool?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              as={<RadioGroup />}
              id="indoorPool"
              name="indoorPool"
              defaultValue=""
              control={control}
              buttonStyle="solid"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Not Sure', value: 'not-sure' },
              ]}
              onChange={([e]) => {
                return e.target.value;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Is this a trendy hotel?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              as={<RadioGroup />}
              id="isTrendy"
              name="isTrendy"
              defaultValue=""
              control={control}
              buttonStyle="solid"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Not Sure', value: 'not-sure' },
              ]}
              onChange={([e]) => {
                return e.target.value;
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Is this a romantic hotel?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              as={<RadioGroup />}
              id="isRomantic"
              name="isRomantic"
              defaultValue=""
              control={control}
              buttonStyle="solid"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Not Sure', value: 'not-sure' },
              ]}
              onChange={([e]) => {
                return e.target.value;
              }}
            />
          </Col>
        </Row>
      </FormControl>
      <Row type="flex" justify="space-between">
        <Col>
          <FormControl label="Service" htmlFor="serviceRatings">
            <Controller
              as={<Rate />}
              id="serviceRatings"
              name="serviceRatings"
              defaultValue=""
              control={control}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Rooms" htmlFor="roomsRatings">
            <Controller
              as={<Rate />}
              id="roomsRatings"
              name="roomsRatings"
              defaultValue=""
              control={control}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Cleanliness" htmlFor="cleanlinessRatings">
            <Controller
              as={<Rate />}
              id="cleanlinessRatings"
              name="cleanlinessRatings"
              defaultValue=""
              control={control}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Food" htmlFor="foodRatings">
            <Controller
              as={<Rate />}
              id="foodRatings"
              name="foodRatings"
              defaultValue=""
              control={control}
            />
          </FormControl>
        </Col>
      </Row>
      <FormControl
        label="Add a tip to help travelers choose a good room"
        htmlFor="tips"
      >
        <Controller
          as={<Input />}
          id="tips"
          name="tips"
          defaultValue=""
          control={control}
          placeholder="E. g. Best views, quieter floors, accessiblity, etc."
        />
      </FormControl>
      <FormControl label="Do You have photos to share? (Optional)">
        <DragAndDropUploader
          name="reviewPhotos"
          onUploadChange={(data) => setValue('hotelPhotos', data)}
        />
      </FormControl>
      <FormControl>
        <Controller
          name="termsAndCondition"
          onChange={([e]) => {
            return e.target.checked;
          }}
          as={
            <Checkbox>
              I certify that this review is based on my own experience and is my
              genuine opinion of this hotel, and that I have no personal or
              business relationship with this establishment, and have not been
              offered any incentive or payment originating from the
              establishment to write this review. I understand that TripFinder
              has a zero-tolerance policy on fake reviews.
            </Checkbox>
          }
          control={control}
        />
      </FormControl>
      <FormControl className="submit-container">
        <Button htmlType="submit" type="primary" size="large">
          Submit Your Review
        </Button>
      </FormControl>
    </Form>
  );
};

export default ReviewForm;
