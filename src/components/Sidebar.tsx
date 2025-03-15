import React from 'react';
import {
  SidebarContainer,
  SectionTitle,
  MenuList,
  MenuItem,
  IconWrapper,
} from './styled/SidebarStyles';
import { useRoutine } from '../context/RoutineContext';
import { 
  FiCalendar, 
  FiSun, 
  FiMoon, 
  FiBook, 
  FiBookOpen, 
  FiUser, 
  FiActivity, 
  FiBriefcase, 
  FiCoffee 
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const { selectedRoutine, setSelectedRoutine } = useRoutine();

  return (
    <SidebarContainer>
      <SectionTitle>Routines</SectionTitle>
      <MenuList>
        <MenuItem 
          onClick={() => setSelectedRoutine('weekly')}
          className={selectedRoutine === 'weekly' ? 'active' : ''}
        >
          <IconWrapper $color="#4CAF50">
            {FiCalendar({ size: 20 })}
          </IconWrapper>
          Weekly Tasks
        </MenuItem>
        <MenuItem 
          onClick={() => setSelectedRoutine('morning')}
          className={selectedRoutine === 'morning' ? 'active' : ''}
        >
          <IconWrapper $color="#FF6B6B">
            {FiSun({ size: 20 })}
          </IconWrapper>
          Morning Routine
        </MenuItem>
        <MenuItem 
          onClick={() => setSelectedRoutine('night')}
          className={selectedRoutine === 'night' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiMoon({ size: 20 })}
          </IconWrapper>
          Night Routine
        </MenuItem>
      </MenuList>

      <SectionTitle>Categories</SectionTitle>
      <MenuList>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiBook({ size: 20 })}
          </IconWrapper>
          Journal
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiBookOpen({ size: 20 })}
          </IconWrapper>
          School
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiUser({ size: 20 })}
          </IconWrapper>
          Personal
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiActivity({ size: 20 })}
          </IconWrapper>
          Fitness
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiBriefcase({ size: 20 })}
          </IconWrapper>
          Work
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FiCoffee({ size: 20 })}
          </IconWrapper>
          Cooking
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;