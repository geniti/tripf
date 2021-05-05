import React, { useState } from 'react';
import PricingItems from './PricingItems';
import PricingWrapper, {
  PricingHeader,
  Title,
  Description,
  ButtonGroup,
  PricingTableArea,
  Button,
} from './Pricing.style';
// demo data
import { monthlyPlans, annuallyPlans } from './Pricing.data';

const Pricing = () => {
  const [currentPlan, setCurrentPlan] = useState('monthly');
  let plans = [];
  if (currentPlan === 'monthly') {
    plans = monthlyPlans;
  }
  if (currentPlan === 'annually') {
    plans = annuallyPlans;
  }

  return (
    <PricingWrapper>
      <PricingHeader>
        <Title>Select Your Pricing Plan</Title>
        <Description>
          Simple Transparent pricing for everyone, whether you are local hotel
          owner or an agent.
        </Description>
        <ButtonGroup>
          <Button
            onClick={() => setCurrentPlan('monthly')}
            className={currentPlan === 'monthly' ? 'active' : null}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setCurrentPlan('annually')}
            className={currentPlan === 'annually' ? 'active' : null}
          >
            Annually
          </Button>
        </ButtonGroup>
      </PricingHeader>
      <PricingTableArea>
        <PricingItems plans={plans} />
      </PricingTableArea>
    </PricingWrapper>
  );
};

export default Pricing;
