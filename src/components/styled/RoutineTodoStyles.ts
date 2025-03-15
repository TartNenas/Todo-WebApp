import styled from 'styled-components';

export const RoutineContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export const RoutineHeader = styled.div<{ routineType?: 'weekly' | 'morning' | 'night' }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.large};
    margin: 0;
    color: ${({ routineType, theme }) => 
      routineType === 'weekly' 
        ? theme.colors.weeklyGreen 
        : routineType === 'morning' 
        ? theme.colors.morningRed 
        : routineType === 'night' 
        ? theme.colors.nightPurple 
        : theme.colors.primary};
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
  grid-template-columns: 40px 1fr 120px 120px 80px;
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
  grid-template-columns: 40px 1fr 120px 120px 80px;
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
  accent-color: ${({ theme }) => theme.colors.weeklyGreen};
`;

export const TaskName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const TaskStatus = styled.div<{ status: 'not-started' | 'in-progress' | 'done' }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  background-color: ${({ status, theme }) => 
    status === 'not-started' 
      ? theme.colors.morningRed
      : status === 'in-progress'
      ? theme.colors.nightPurple
      : theme.colors.weeklyGreen};
  color: white;
  text-align: center;
  width: fit-content;
`;

export const TaskCategory = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  background-color: ${({ theme }) => theme.colors.nightPurple};
  color: white;
  text-align: center;
  width: fit-content;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.gray.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
`;