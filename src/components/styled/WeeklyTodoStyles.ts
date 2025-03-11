import styled from 'styled-components';

export const WeeklyContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export const WeeklyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  padding-bottom: ${({ theme }) => theme.spacing.md};

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.large};
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 120px 120px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.light};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TaskRow = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 120px 120px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};

  &:last-child {
    border-bottom: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  cursor: pointer;
  accent-color: #4CAF50;
`;

export const TaskName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const TaskStatus = styled.div<{ status: 'not-started' | 'in-progress' | 'done' }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  background-color: ${({ status }) => 
    status === 'not-started' 
      ? '#dc6b6b'
      : status === 'in-progress'
      ? '#4a90c2'
      : '#4CAF50'};
  color: white;
  text-align: center;
  width: fit-content;
`;

export const TaskCategory = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  background-color: #ff1493;
  color: white;
  text-align: center;
  width: fit-content;
`; 