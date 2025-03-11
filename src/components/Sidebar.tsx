import React from 'react';
import {
  SidebarContainer,
  SectionTitle,
  MenuList,
  MenuItem,
  IconWrapper,
} from './styled/SidebarStyles';
import { FaSun, FaMoon, FaBook, FaSchool, FaUser, FaDumbbell, FaBriefcase, FaUtensils } from 'react-icons/fa6';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SectionTitle>Routines</SectionTitle>
      <MenuList>
        <MenuItem>
          <IconWrapper $color="#FF6B6B">
            {FaSun({ size: 20 })}
          </IconWrapper>
          Morning Routine
        </MenuItem>
        <MenuItem>
          <IconWrapper $color="#845EC2">
            {FaMoon({ size: 20 })}
          </IconWrapper>
          Night Routine
        </MenuItem>
      </MenuList>

      <SectionTitle>Categories</SectionTitle>
      <MenuList>
        <MenuItem>
          <IconWrapper>
            {FaBook({ size: 20 })}
          </IconWrapper>
          Journal
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            {FaSchool({ size: 20 })}
          </IconWrapper>
          School
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            {FaUser({ size: 20 })}
          </IconWrapper>
          Personal
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            {FaDumbbell({ size: 20 })}
          </IconWrapper>
          Fitness
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            {FaBriefcase({ size: 20 })}
          </IconWrapper>
          Work
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            {FaUtensils({ size: 20 })}
          </IconWrapper>
          Cooking
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;