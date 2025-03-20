import React from 'react';
import {
  SidebarContainer,
  SectionTitle,
  MenuList,
  MenuItem,
  IconWrapper,
} from './styled/SidebarStyles';
import { useRoutine } from '../context/RoutineContext';
import DonateComponent from './ui/DonateComponent';
import { 
  FiCalendar, 
  FiSun, 
  FiMoon, 
  FiBook, 
  FiBookOpen, 
  FiUser, 
  FiActivity, 
  FiBriefcase, 
  FiCoffee,
  FiGrid
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const { selectedRoutine, setSelectedRoutine, selectedCategory, setSelectedCategory } = useRoutine();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category as any);
  };

  return (
    <SidebarContainer>
      <DonateComponent />
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
        <MenuItem
          onClick={() => handleCategoryClick('All')}
          className={selectedCategory === 'All' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiGrid({ size: 20 })}
          </IconWrapper>
          All Categories
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('Journal')}
          className={selectedCategory === 'Journal' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiBook({ size: 20 })}
          </IconWrapper>
          Journal
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('School')}
          className={selectedCategory === 'School' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiBookOpen({ size: 20 })}
          </IconWrapper>
          School
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('Personal')}
          className={selectedCategory === 'Personal' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiUser({ size: 20 })}
          </IconWrapper>
          Personal
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('Fitness')}
          className={selectedCategory === 'Fitness' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiActivity({ size: 20 })}
          </IconWrapper>
          Fitness
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('Work')}
          className={selectedCategory === 'Work' ? 'active' : ''}
        >
          <IconWrapper $color="#845EC2">
            {FiBriefcase({ size: 20 })}
          </IconWrapper>
          Work
        </MenuItem>
        <MenuItem
          onClick={() => handleCategoryClick('Cooking')}
          className={selectedCategory === 'Cooking' ? 'active' : ''}
        >
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