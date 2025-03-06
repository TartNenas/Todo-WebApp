import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  ButtonGroup,
  StyledButton,
} from './styled/TodoStyles';

interface TodoFormProps {
  onClose: () => void;
  onSubmit: (todo: {
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
  }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium' as 'Low' | 'Medium' | 'High',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              value={formData.title}
              onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <TextArea
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Due Date</Label>
            <Input
              type="date"
              value={formData.dueDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dueDate: e.target.value })}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Priority</Label>
            <Select
              value={formData.priority}
              onChange={e => setFormData({ ...formData, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
          </FormGroup>

          <ButtonGroup>
            <StyledButton type="button" variant="secondary" onClick={onClose}>
              Cancel
            </StyledButton>
            <StyledButton type="submit">
              Create Todo
            </StyledButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default TodoForm; 