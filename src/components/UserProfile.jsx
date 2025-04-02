import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { data, status, error } = useSelector((state) => state.user);

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div className="p-4 border rounded-md shadow-md">
      <img src={data.avatar_url} alt={data.login} className="w-20 h-20 rounded-full" />
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>@{data.login}</p>
      <p>Seguidores: {data.followers}</p>
      <p>Repositorios: {data.public_repos}</p>
    </div>
  );
};

export default UserProfile;