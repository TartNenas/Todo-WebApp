import React from 'react';
import styled from 'styled-components';
import changelogData from './changelogData';
import { 
  FiSend, 
  FiCheckSquare, 
  FiBarChart2, 
  FiCalendar, 
  FiFolder, 
  FiSave, 
  FiEdit, 
  FiSmartphone, 
  FiClock 
} from 'react-icons/fi';

const ChangelogContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const ChangelogHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 3.5rem;
  font-weight: 600;
`;

const ChangelogSubheader = styled.p`
  color: ${({ theme }) => theme.colors.gray.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 1.2rem;
  margin-top: 0;
`;

const VersionGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const VersionBadge = styled.div`
  background: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: 20px;
  display: inline-block;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const VersionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const VersionDate = styled.span`
  color: ${({ theme }) => theme.colors.gray.medium};
  font-size: 1rem;
  margin-left: auto;
  font-weight: normal;
`;

const VersionDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1rem;
  line-height: 1.5;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;
  
  &:before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.gray.light};
  }
`;

const ChangeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ChangeItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: 28px;
  
  &:before {
    content: "";
    position: absolute;
    left: -30px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const ChangeTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

const ChangeDescription = styled.div`
  color: ${({ theme }) => theme.colors.gray.dark};
`;

const ReleaseTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 10px;
  vertical-align: middle;
`;

const PatchesTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Changelog: React.FC = () => {
  const renderIcon = (iconName: string | undefined) => {
    if (!iconName) return null;
    
    return (
      <IconWrapper>
        {iconName === 'FaRocket' && FiSend({ size: 20 })}
        {iconName === 'FaCheckSquare' && FiCheckSquare({ size: 20 })}
        {iconName === 'FaChartBar' && FiBarChart2({ size: 20 })}
        {iconName === 'FaCalendarWeek' && FiCalendar({ size: 20 })}
        {iconName === 'FaFolderOpen' && FiFolder({ size: 20 })}
        {iconName === 'FaSave' && FiSave({ size: 20 })}
        {iconName === 'FaPaintBrush' && FiEdit({ size: 20 })}
        {iconName === 'FaMobileAlt' && FiSmartphone({ size: 20 })}
        {iconName === 'FaHistory' && FiClock({ size: 20 })}
      </IconWrapper>
    );
  };

  return (
    <ChangelogContainer>
      <ChangelogHeader>Changelog</ChangelogHeader>
      <ChangelogSubheader>New updates and improvements</ChangelogSubheader>
      
      {changelogData.versions.map((version, index) => (
        <VersionGroup key={index}>
          <VersionBadge>{version.versionNumber}</VersionBadge>
          
          <VersionTitle>
            {version.titleIcon && renderIcon(version.titleIcon)}
            {version.title}
            {version.isRolling && <ReleaseTag>Rolling</ReleaseTag>}
            <VersionDate>{version.date}</VersionDate>
          </VersionTitle>
          
          <VersionDescription>
            {version.description}
          </VersionDescription>
          
          <Timeline>
            <ChangeList>
              {version.changes.map((change, changeIndex) => (
                <ChangeItem key={changeIndex}>
                  <ChangeTitle>
                    {change.icon && renderIcon(change.icon)}
                    {change.title}
                  </ChangeTitle>
                  <ChangeDescription>
                    {change.description}
                  </ChangeDescription>
                </ChangeItem>
              ))}
            </ChangeList>
            
            {version.patches && version.patches.length > 0 && (
              <>
                <PatchesTitle>Patches</PatchesTitle>
                <ChangeList>
                  {version.patches.map((patch, patchIndex) => (
                    <ChangeItem key={patchIndex}>
                      <ChangeTitle>{patch.version}</ChangeTitle>
                      <ChangeDescription>
                        {patch.description}
                      </ChangeDescription>
                    </ChangeItem>
                  ))}
                </ChangeList>
              </>
            )}
          </Timeline>
        </VersionGroup>
      ))}
    </ChangelogContainer>
  );
};

export default Changelog;
