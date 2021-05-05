import React, { useState, Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';
import Rating from 'components/UI/Rating/Rating';
import { Button, Modal } from 'antd';
import StickyBooking from 'components/StickyBooking/StickyBooking';
import Reservation from './Reservation';

const BottomReservation = ({ title, price, rating, ratingCount }) => {
  const [state, setState] = useState(false);
  const toggleModal = () => {
    setState(!state);
  };
  const handleCancel = () => {
    setState(!state);
  };

  return (
    <Fragment>
      <StickyBooking
        logo="/images/logo-alt.svg"
        title={title}
        price={price}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={toggleModal}>
            Book
          </Button>
        }
      />

      <Modal
        visible={state}
        onCancel={handleCancel}
        footer={null}
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <Reservation />
        <Button onClick={handleCancel} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </Fragment>
  );
};

export default BottomReservation;
