import UserCard from './UserCard';

function App() {
  const users = [
    {
      id: 1,
      name: 'Алина',
      age: 22,
      email: 'alina@example.com',
    },
    {
      id: 2,
      name: 'Максим',
      age: 25,
      email: 'maxim@example.com',
    },
    {
      id: 3,
      name: 'Екатерина',
      age: 20,
      email: 'ekaterina@example.com',
    },
  ];

  return (
    <div>
      <h1>Пользователи</h1>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;



