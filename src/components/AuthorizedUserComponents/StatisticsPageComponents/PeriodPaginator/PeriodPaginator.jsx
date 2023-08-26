import { useState } from 'react';
import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  CalendarButton,
  SwitcherContainer,
  SwitcherPart,
  List,
  ListItem,
} from './PeriodPaginator.styled';

const PeriodPaginator = () => {
  const [activeSwitcher, setActiveSwitcher] = useState(0);

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <CalendarButton>19 JUNE 2023</CalendarButton>
        <SwitcherContainer>
          <SwitcherPart
            active={activeSwitcher === 0}
            onClick={() => setActiveSwitcher(0)}
          >
            ❮
          </SwitcherPart>
          <SwitcherPart
            active={activeSwitcher === 1}
            onClick={() => setActiveSwitcher(1)}
          >
            ❯
          </SwitcherPart>
        </SwitcherContainer>
      </ButtonsContainer>
      <List>
        <ListItem>By Day</ListItem>
        <ListItem>By Month</ListItem>
      </List>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;
