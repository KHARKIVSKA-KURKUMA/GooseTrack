import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ onChangeType }) => {
  const [activePage, setActivePage] = useState('month');
  const theme = useSelector(state => state.theme);
  const currentDate = useSelector(state => state.date.currentDate);
  const isLightTheme = theme === 'light';
  const backgroundColor = isLightTheme ? '#E3F3FF' : '#21222C';
  const activeBackground = isLightTheme ? '#CAE8FF' : '#3E85F3';

  return (
    <List>
      <Item>
        <StyledNavLink
          style={{
            backgroundColor:
              activePage === 'month' ? activeBackground : backgroundColor,
            color: isLightTheme ? 'var(--title-color)' : 'white',
          }}
          className={`month`}
          to={`/calendar/month/${currentDate}`}
          onClick={() => {
            setActivePage('month');
            onChangeType('month');
          }}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          style={{
            backgroundColor:
              activePage === 'day' ? activeBackground : backgroundColor,
            color: isLightTheme ? 'var(--title-color)' : 'white',
          }}
          className={`day`}
          to={`/calendar/day/${currentDate}`}
          onClick={() => {
            setActivePage('day');
            onChangeType('day');
          }}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;
