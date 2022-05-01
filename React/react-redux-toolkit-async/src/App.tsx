import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchTodo } from './redux/slice/todoSlice';

function App() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(state => state.todo.todoList);
  useEffect(() => {
    dispatch(fetchTodo())
      .unwrap()
      .then(() => {
        Swal.fire({toast: true, timer: 2000, showConfirmButton: false, timerProgressBar: true, icon: 'success', title:'Successful'});
      })
      .catch((error) => {
        Swal.fire({toast: true, timer: 2000, showConfirmButton: false, timerProgressBar: true, icon: 'error', title: error});
      });
  }, [dispatch]);
  return (
  <div>
    <h1>Todo</h1>
    {
      todoList &&
      todoList.map((todo) => {
      return (
        <div key={todo.id} style={{marginTop: '6px', padding: '4px', border: '1px solid #000'}}>
          <div>userId: {todo.userId}</div>
          <div>id: {todo.id}</div>
          <div>title: {todo.title}</div>
          <div>completed: {todo.completed}</div>
        </div>
        );
      })
    }
  </div>
  );
}

export default App;
