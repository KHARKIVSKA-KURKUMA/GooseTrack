import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`;
export const StyledNavLink = styled(NavLink)`
  width: 82px;
  padding: 8px 0;
  color: var(--title-color);
  background: #e3f3ff;
  text-align: center;
  &.active {
    color: var(--btn-background-color);
    background: #cae8ff;
  }
  &.month {
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }
  &.day {
    border-radius: 0 8px 8px 0;
  }
  transition: background 100ms linear, color 100ms linear;
  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

// для драфту

export const Button = styled.div`
  width: 82px;
  padding: 8px 0;
  color: var(--title-color);
  background: ${props => props.backgroundColor};
  text-align: center;
  &.active {
    color: var(--title-color);
    background: ${props => props.activeBackground};
  }
  &.month {
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }
  &.day {
    border-radius: 0 8px 8px 0;
  }
  transition: background 100ms linear, color 100ms linear;
  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
