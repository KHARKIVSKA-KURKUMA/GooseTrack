import styled from 'styled-components';

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const InitialsAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid #3e85f3;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const UserName = styled.div`
  font-size: 14px;
  font-family: Inter;
  font-weight: 700;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const UserInfo = ({ userName, avatarUrl }) => {
  const hasAvatar = Boolean(avatarUrl);

  return (
    <Info>
      <UserName>{userName}</UserName>
      {hasAvatar ? (
        <Avatar src={avatarUrl} alt="User Avatar" />
      ) : (
        <InitialsAvatar>{userName.charAt(0).toUpperCase()}</InitialsAvatar>
      )}
    </Info>
  );
};

export default UserInfo;
