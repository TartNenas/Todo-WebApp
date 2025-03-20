import styled from 'styled-components';

export const DonateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const DonateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
`;

export const DonateButton = styled.a`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: #FF6B6B;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5252;
  }
`;