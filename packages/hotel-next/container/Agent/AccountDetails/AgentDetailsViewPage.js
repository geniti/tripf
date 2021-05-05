import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import { ProfilePicLoader } from 'components/UI/ContentLoader/ContentLoader';
import Loader from 'components/Loader/Loader';
import { ADD_HOTEL_PAGE } from 'settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  SocialAccount,
  NavigationArea,
} from './AgentDetails.style';

const AgentFavItemLists = dynamic(() => import('./AgentFavItemLists'));
const AgentContact = dynamic(() => import('./AgentContact'));
const AgentItemLists = dynamic(() => import('./AgentItemLists'));

const ProfileNavigation = (props) => {
  const [component, setComponent] = useState('allListing');
  const { className, isLoggedIn } = props;

  return (
    <Fragment>
      <NavigationArea>
        <Container fluid={true}>
          <Menu className={className}>
            <Menu.Item key="0">
              <a
                className={component === 'allListing' ? 'active' : ''}
                onClick={() => setComponent('allListing')}
              >
                Listings
              </a>
            </Menu.Item>
            <Menu.Item key="1">
              <a
                className={component === 'favouriteListing' ? 'active' : ''}
                onClick={() => setComponent('favouriteListing')}
              >
                Favourites
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a
                className={component === 'contact' ? 'active' : ''}
                onClick={() => setComponent('contact')}
              >
                Contact
              </a>
            </Menu.Item>
          </Menu>

          {isLoggedIn && (
            <Link href={`${ADD_HOTEL_PAGE}`}>
              <a className="add_card">
                <IoIosAdd /> Add Hotel
              </a>
            </Link>
          )}
        </Container>
      </NavigationArea>
      <Container fluid={true}>
        {component === 'allListing' && <AgentItemLists {...props} />}
        {component === 'favouriteListing' && <AgentFavItemLists {...props} />}
        {component === 'contact' && <AgentContact {...props} />}
      </Container>
    </Fragment>
  );
};

const AgentProfileInfo = (props) => {
  const { processedData, loading } = props;
  if (isEmpty(processedData) || loading) return <Loader />;

  const {
    first_name,
    last_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = processedData[0];

  return (
    <Fragment>
      <BannerSection>
        <Image
          src={cover_pic.url}
          alt="Profile Cover Pic"
          layout="fill"
          objectFit="cover"
        />
      </BannerSection>

      <UserInfoArea>
        <Container fluid={true}>
          <ProfileImage>
            {profile_pic ? (
              <Image
                src={profile_pic.url}
                alt="Profile Pic"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <ProfilePicLoader />
            )}
          </ProfileImage>

          <ProfileInformationArea>
            <ProfileInformation>
              <Heading content={`${first_name} ${last_name}`} />
              <Text content={content} />
            </ProfileInformation>

            <SocialAccount>
              <Popover content="Twitter">
                <a
                  href={social_profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="twitter" />
                </a>
              </Popover>
              <Popover content="Facebook">
                <a
                  href={social_profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="facebook" />
                </a>
              </Popover>
              <Popover content="Instagram">
                <a
                  href={social_profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="instagram" />
                </a>
              </Popover>
            </SocialAccount>
          </ProfileInformationArea>
        </Container>
      </UserInfoArea>
    </Fragment>
  );
};

export default function AgentDetailsViewPage(props) {
  return (
    <AgentDetailsPage>
      <AgentProfileInfo {...props} />
      <ProfileNavigation {...props} />
    </AgentDetailsPage>
  );
}
