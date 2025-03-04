import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: 100;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`; 