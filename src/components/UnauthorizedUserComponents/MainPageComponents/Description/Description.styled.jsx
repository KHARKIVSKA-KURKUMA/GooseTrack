import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  @media (min-width: 768px) {
    padding-inline: 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 128px;
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
`;

const Wrapper = styled.div`
  /* margin: 0 auto;
  padding-inline: 20px;

  @media (min-width: 768px) {
    padding-inline: 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 128px;
  } */
`;

const Number = styled.p`
  margin-bottom: 14px;
  margin-top: 0;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: #3e85f3;
`;

const Title = styled.p`
  display: inline-block;
  padding: 8px 18px;
  margin-top: 0;
  margin-bottom: 8px;
  background-color: rgb(220, 235, 247);
  border-radius: 44px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #3e85f3;
`;

const Subtitle = styled.p`
  margin-bottom: 14px;
  margin-top: 0;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #171820;
`;

const Content = styled.p`
  font-weight: 500;
  margin: 0;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.2;

  color: #111111e5;
`;

const Image = styled.picture`
margin: 0;
  width: 100%;
  height: auto;

  /* @media (min-width: 768px) {
    width: 100%;
    & img {
      width: 100%;
      max-width: 900px;
    }
  }  */
`;

export {
  Container,
  DescriptionList,
  DescriptionItem,
  DescriptionBlock,
  Wrapper,
  Number,
  Title,
  Subtitle,
    Content,
  Image
};
    
    
