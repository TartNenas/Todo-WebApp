import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`; 