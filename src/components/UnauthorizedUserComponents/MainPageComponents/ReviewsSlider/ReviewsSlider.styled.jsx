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

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1.14;
  color: #3e85f3;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`;

const ReviewWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 580px;
    padding: 32px;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const UserAvatar = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  margin-right: 18px;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: bold;
  color: #343434;
`;

const UserReview = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.29;
`;

const Star = styled.img`
  margin-right: 10px;
  display: inline;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ArrowLeft = styled.div`
  transform: scale(-1, 1);
  margin-right: 10px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;

  &:active {
    transform: scale(-1.5, 1);
  }
`;

const ArrowRight = styled.div`
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;
  &:active {
    transform: scale(1.5, 1);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export {
  Container,
  Title,
  ReviewWrapper,
  UserWrapper,
  UserAvatar,
  UserName,
  UserReview,
  Star,
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
  LoaderContainer,
};
