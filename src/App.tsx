import { useEffect } from 'react';
import './App.css'
import { useAppDispatch } from './hooks';
import { fetchUers } from './redux/users/operations';
import UserList from './components/UsersList/UsersList';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUers())
  }, [dispatch])
  
  return <UserList />  
}

export default App
