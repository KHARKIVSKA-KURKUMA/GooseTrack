import { toast } from 'react-toastify';

export const Notification = () => next => action => {

  /// Tasks ///

  if (action.type === 'tasks/addTask/fulfilled') {
    toast.success('Task created successfully');
  }
  if (action.type === 'tasks/deleteTask/fulfilled') {
    toast.info('Task deleted');
  }
  if (action.type === 'tasks/editTask/fulfilled') {
    toast.success('Task updated successfully');
  }
  if (action.type === 'tasks/addTask/rejected') {
    toast.error('Oops, something went wrong...');
  }
  if (action.type === 'tasks/deleteTask/rejected') {
    toast.error('Oops, something went wrong...');
  }
  if (action.type === 'tasks/editTask/rejected') {
    toast.error('Oops, something went wrong...');
  }

  /// Reviews ///
  
  if (action.type === 'feedback/addReview/fulfilled') {
    toast.success('Review created successfully');
  }
  if (action.type === 'feedback/deleteReview/fulfilled') {
    toast.info('Review deleted');
  }
  if (action.type === 'feedback/editReview/fulfilled') {
    toast.success('Review updated successfully');
  }
  if (action.type === 'feedback/addReview/rejected') {
    toast.error('Oops, something went wrong...');
  }
  if (action.type === 'feedback/deleteReview/rejected') {
    toast.error('Oops, something went wrong...');
  }
  if (action.type === 'feedback/editReview/rejected') {
    toast.error('Oops, something went wrong...');
  }

  return next(action);
};
