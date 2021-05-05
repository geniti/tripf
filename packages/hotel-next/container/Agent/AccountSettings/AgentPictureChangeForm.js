import React from 'react';
import { Button } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import ImageUploader from 'components/UI/ImageUploader/ImageUploader';
import { AgentPictureUploader, FormTitle } from './AccountSettings.style';

export default function AgentPictureChangeForm() {
  return (
    <AgentPictureUploader>
      <FormTitle>Profile Images</FormTitle>
      <Heading content="Cover Image" as="h4" />
      <ImageUploader />
      <Heading content="Profile Image" as="h4" />
      <ImageUploader />

      <div className="submit-container">
        <Button htmlType="submit" type="primary">
          Save Changes
        </Button>
      </div>
    </AgentPictureUploader>
  );
}
