import { useState, useEffect } from 'react';
import { getPosts, getRandomUser } from './api';
import './App.css';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';
import Button from './components/Button';

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUser(user.results[0]));
  }, []);

  const refreshUser = () => {
    //or we could have used useState and keep increasing its count and put put in useEffect of getRandomUser
    getRandomUser().then((user) => setUser(user.results[0]));
  }

  return (
    <div className="App">
      {user ? (<UserCard data={user} />) : <p>No User Data</p>}
      <Button onClick={refreshUser}/>
      {
        data ? data.map((user, index) => <PostCard title={user.title} body={user.body} />) : <p>No Data</p>
      }
    </div>
  );
}

export default App;
