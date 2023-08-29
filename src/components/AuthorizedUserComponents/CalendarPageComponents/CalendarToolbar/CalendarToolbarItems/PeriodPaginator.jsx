import { useState } from 'react';
import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  CalendarButton,
  SwitcherContainer,
  SwitcherPart,
  
} from './PeriodPaginator.styled';

const PeriodPaginator = () => {
  const [activeSwitcher, setActiveSwitcher] = useState(0);

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <CalendarButton>6 MAR 2023</CalendarButton>
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
      
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;
