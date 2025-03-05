import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  padding-bottom: calc(${({ theme }) => theme.spacing.xl} + 80px);
  min-height: 100vh;
  --color: #E1E1E1;
  background-color: #F3F3F3;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
  background-size: 55px 55px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Column = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  min-width: 300px;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.large};
    margin: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.gray.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
  }
`;

export const StatusDot = styled.div<{ status: 'todo' | 'ongoing' | 'completed' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status, theme }) => 
    status === 'todo' 
      ? theme.colors.secondary 
      : status === 'ongoing'
      ? '#FFA500'
      : '#4CAF50'};
`;

export const TodoCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const TodoTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`;

export const TodoDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

export const TodoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export const DueDate = styled.span`
  color: ${({ theme }) => theme.colors.gray.medium};
`;

export const PriorityLabel = styled.span<{ priority: 'Low' | 'Medium' | 'High' }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ priority }) => 
    priority === 'High' 
      ? '#ffebee'
      : priority === 'Medium'
      ? '#fff3e0'
      : '#e8f5e9'};
  color: ${({ priority }) => 
    priority === 'High' 
      ? '#c62828'
      : priority === 'Medium'
      ? '#ef6c00'
      : '#2e7d32'};
`;

export const TodoHeader = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const TodoForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme, variant }) =>
    variant === 'secondary' ? 'transparent' : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.text : theme.colors.white};
  border: ${({ theme, variant }) =>
    variant === 'secondary' ? `1px solid ${theme.colors.gray.light}` : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'secondary'
        ? theme.colors.gray.light
        : theme.colors.primary + 'dd'};
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  gap: ${({ theme }) => theme.spacing.md};

  &:last-child {
    border-bottom: none;
  }
`;

export const TodoText = styled.span<{ completed?: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ theme, completed }) =>
    completed ? theme.colors.gray.medium : theme.colors.text};
`;

export const CreateButton = styled.button`
  position: fixed;
  bottom: calc(${({ theme }) => theme.spacing.xl} + 80px);
  right: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.2s;
  z-index: 99;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  background: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`; 