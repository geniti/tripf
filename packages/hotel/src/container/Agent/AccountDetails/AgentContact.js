import React from 'react';
import { Row, Col } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Loader from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactFrom';
import useDataApi from 'library/hooks/useDataApi';
import { AgentContactWrapper, ContactDetails } from './AgentDetails.style';
import isEmpty from 'lodash/isEmpty';

const AgentContact = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const { agent_location, cell_number, email } = data[0];

  return (
    <AgentContactWrapper>
      <Heading content="Send Message" />
      <Row gutter={30}>
        <Col lg={16}>
          <ContactForm />
        </Col>
        <Col lg={8}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={cell_number} />
            <Heading as="h3" content="Email" />
            <Text content={email} />
            <Heading as="h3" content="Address" />
            <Text content={agent_location.formattedAddress} />
          </ContactDetails>
        </Col>
      </Row>
    </AgentContactWrapper>
  );
};

export default AgentContact;
