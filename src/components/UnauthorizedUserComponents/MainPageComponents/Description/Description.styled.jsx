import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding-inline: 20px;
  padding-bottom: 64px;

  @media (min-width: 768px) {
    padding-inline: 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 128px;
    padding-bottom: 100px;
  }
`;

const DescriptionList = styled.ul`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  gap: 64px;
  margin-left: 0;
  padding-left: 0;
`;

const DescriptionItem = styled.li`
  list-style: none;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 275px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const Sidebar = styled.div`
  margin-left: auto;

  @media (min-width: 768px) {
    padding-inline: 32px;
    width: 275px;
  }

  @media (min-width: 1440px) {
    order: 1;
    margin-right: 77px;
  }
`;

const Number = styled.p`
  margin-bottom: 14px;
  margin-top: 0;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: var(--title-color);

  @media (min-width: 768px) {
    font-size: 104px;
  }
`;

const Title = styled.p`
  display: inline-block;
  padding: 8px 18px;
  margin-top: 0;
  margin-bottom: 8px;
  background-color: var(--auth-background-color);
  border-radius: 44px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--title-color);

  @media (min-width: 768px) {
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 14px;
  margin-top: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--subtitle-color);

  @media (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
  }
`;

const Content = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  color: var(--descr-color);

  @media (min-width: 768px) {
    max-width: 275px;
  }
`;

const Image = styled.picture`
  margin: 0;

  @media (min-width: 768px) {
    width: 100%;
    & img {
      width: 100%;
      max-width: 900px;
    }
  }
`;

const ImageLeft = styled.picture`
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
    & img {
      margin-left: auto;
      width: 100%;
      max-width: 900px;
    }
  }
`;

export {
  Container,
  DescriptionList,
  DescriptionItem,
  DescriptionBlock,
  Sidebar,
  Wrapper,
  Number,
  Title,
  Subtitle,
  Content,
  Image,
  ImageLeft,
};
