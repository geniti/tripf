import React, { useState } from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { Progress } from 'antd';
import BasicInformation from './BasicInformation';
import HotelPhotos from './HotelPhotos';
import HotelLocation from './HotelLocation';
import HotelAmenities from './HotelAmenities';
import Stepper from './AddListing.style';

createStore({
  data: {},
});

const AddListing = () => {
  let stepComponent;
  const [step, setStep] = useState(1);
  switch (step) {
    case 1:
      stepComponent = <BasicInformation setStep={setStep} />;
      break;

    case 2:
      stepComponent = <HotelPhotos setStep={setStep} />;
      break;

    case 3:
      stepComponent = <HotelLocation setStep={setStep} />;
      break;

    case 4:
      stepComponent = <HotelAmenities setStep={setStep} />;
      break;

    default:
      stepComponent = null;
  }

  return (
    <StateMachineProvider>
      <Stepper>
        <Progress
          className="stepper-progress"
          percent={step * 25}
          showInfo={false}
        />
        {stepComponent}
      </Stepper>
    </StateMachineProvider>
  );
};

export default AddListing;
