import calendarMobile1x from '../../../../img/mobile/feature-calendar1x.png';
import calendarMobile2x from '../../../../img/mobile/feature-calendar2x.png';
import calendarMobile3x from '../../../../img/mobile/feature-calendar3x.png';
import sidebarMobile1x from '../../../../img/mobile/feature-sidebar1x.png';
import sidebarMobile2x from '../../../../img/mobile/feature-sidebar2x.png';
import sidebarMobile3x from '../../../../img/mobile/feature-sidebar3x.png';
import allInMobile1x from '../../../../img/mobile/feature-all-in1x.png';
import allInMobile2x from '../../../../img/mobile/feature-all-in2x.png';
import allInMobile3x from '../../../../img/mobile/feature-all-in3x.png';

import calendarTablet1x from '../../../../img/tablet/feature-calendar1x.png';
import calendarTablet2x from '../../../../img/tablet/feature-calendar2x.png';
import calendarTablet3x from '../../../../img/tablet/feature-calendar3x.png';
import sidebarTablet1x from '../../../../img/tablet/feature-sidebar1x.png';
import sidebarTablet2x from '../../../../img/tablet/feature-sidebar2x.png';
import sidebarTablet3x from '../../../../img/tablet/feature-sidebar3x.png';
import allInTablet1x from '../../../../img/tablet/feature-all-in1x.png';
import allInTablet2x from '../../../../img/tablet/feature-all-in2x.png';
import allInTablet3x from '../../../../img/tablet/feature-all-in3x.png';

import calendarDesktop1x from '../../../../img/desktop/feature-calendar1x.png';
import calendarDesktop2x from '../../../../img/desktop/feature-calendar2x.png';
import calendarDesktop3x from '../../../../img/desktop/feature-calendar3x.png';
import sidebarDesktop1x from '../../../../img/desktop/feature-sidebar1x.png';
import sidebarDesktop2x from '../../../../img/desktop/feature-sidebar2x.png';
import sidebarDesktop3x from '../../../../img/desktop/feature-sidebar3x.png';
import allInDesktop1x from '../../../../img/desktop/feature-all-in1x.png';
import allInDesktop2x from '../../../../img/desktop/feature-all-in2x.png';
import allInDesktop3x from '../../../../img/desktop/feature-all-in3x.png';

import {
  Container,
  DescriptionList,
  DescriptionItem,
  DescriptionBlock,
  Wrapper,
  Sidebar,
  Number,
  Title,
  Subtitle,
  Content,
  Image,
  ImageLeft,
} from './Description.styled';

const Description = () => {
  return (
    <Container>
      <DescriptionList>
        <DescriptionItem>
          <DescriptionBlock>
            <Wrapper>
              <Number>1.</Number>
              <Title>Calendar</Title>
              <Subtitle>view</Subtitle>
              <Content>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </Content>
            </Wrapper>
            <Image>
              <source
                media="(max-width: 767px)"
                srcSet={`${calendarMobile1x} 1x, ${calendarMobile2x} 2x, ${calendarMobile3x} 3x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${calendarTablet1x} 1x, ${calendarTablet2x} 2x, ${calendarTablet3x} 3x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${calendarDesktop1x} 1x, ${calendarDesktop2x} 2x, ${calendarDesktop3x} 3x`}
              />
              <img src={calendarMobile1x} alt="Calendar" />
            </Image>
          </DescriptionBlock>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionBlock>
            {/* <Wrapper> */}
            <Sidebar>
              <Number>2.</Number>
              <Subtitle>SIDEBAR</Subtitle>
              <Content>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </Content>
            </Sidebar>
            {/* </Wrapper> */}
            <ImageLeft>
              <source
                media="(max-width: 767px)"
                srcSet={`${sidebarMobile1x} 1x, ${sidebarMobile2x} 2x, ${sidebarMobile3x} 3x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${sidebarTablet1x} 1x, ${sidebarTablet2x} 2x, ${sidebarTablet3x} 3x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${sidebarDesktop1x} 1x, ${sidebarDesktop2x} 2x, ${sidebarDesktop3x} 3x`}
              />
              <img src={sidebarMobile1x} alt="Sidebar" />
            </ImageLeft>
          </DescriptionBlock>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionBlock>
            <Wrapper>
              <Number>3.</Number>
              <Title>all in</Title>
              <Subtitle>one</Subtitle>
              <Content>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </Content>
            </Wrapper>
            <Image>
              <source
                media="(max-width: 767px)"
                srcSet={`${allInMobile1x} 1x, ${allInMobile2x} 2x, ${allInMobile3x} 3x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${allInTablet1x} 1x, ${allInTablet2x} 2x, ${allInTablet3x} 3x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${allInDesktop1x} 1x, ${allInDesktop2x} 2x, ${allInDesktop3x} 3x`}
              />
              <img src={allInMobile1x} alt="All features" />
            </Image>
          </DescriptionBlock>
        </DescriptionItem>
      </DescriptionList>
    </Container>
  );
};

export default Description;
