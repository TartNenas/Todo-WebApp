import styled from 'styled-components';

export const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 1619px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const AppContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const TodoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  flex: 1;
  max-width: 1273px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Column = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  width: 400px;
  min-height: 651px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
  }
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

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  /* Specific styles for date input */
  &[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    min-height: 48px;
    cursor: pointer;
    position: relative;
    
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    /* Custom calendar icon */
    &::after {
      content: "📅";
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
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
  bottom: ${({ theme }) => theme.spacing.xl};
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
  z-index: 101;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    width: 48px;
    height: 48px;
    font-size: 20px;
  }

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
  margin: ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => theme.spacing.sm};
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    
    ${StyledButton} {
      width: 100%;
    }
  }
`;