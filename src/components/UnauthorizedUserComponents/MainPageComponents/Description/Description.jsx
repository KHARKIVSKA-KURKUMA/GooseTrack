import calendarMobile1x from '../../../../img/mobile/feature-calendar1x.png';
// import calendarMobile2x from '../../../../img/mobile/feature-calendar2x.png';
// import calendarMobile3x from '../../../../img/mobile/feature-calendar3x.png';

import sidebarMobile1x from '../../../../img/mobile/feature-sidebar1x.png';
import allInMobile1x from '../../../../img/mobile/feature-all-in1x.png';

import {
  Container,
  DescriptionList,
  DescriptionItem,
  DescriptionBlock,
  Wrapper,
  Number,
  Title,
  Subtitle,
  Content,
  Image,

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
              <img src={calendarMobile1x} alt="Calendar" />
            </Image>
          </DescriptionBlock>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionBlock>
            <Wrapper>
              <Number>2.</Number>
              <Subtitle>SIDEBAR</Subtitle>
              <Content>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </Content>
            </Wrapper>
            <Image>
              <img src={sidebarMobile1x} alt="Sidebar" />
            </Image>
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
              <img src={allInMobile1x} alt="All features" />
            </Image>
          </DescriptionBlock>
        </DescriptionItem>
      </DescriptionList>
    </Container>
  );
};

export default Description;
