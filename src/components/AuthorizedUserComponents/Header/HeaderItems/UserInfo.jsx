import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const InitialsAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px){
      width: 30px;
  height: 30px;
  }
`;

const UserName = styled.div`
  font-size: 16px;
  margin-left: 10px;
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
