import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../features/userSlice';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchUser(username));
    }
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        placeholder="Buscar usuario..." 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="border p-2 rounded-md mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
        Buscar
      </button>
    </div>
  );
};

export default SearchUser;