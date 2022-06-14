import { useAsync } from '../../hooks/use-async';

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

function Home() {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <div>Idle: Nada executando</div>;
  }

  if (status === 'pending') {
    return <div>Pending: Carregando...</div>;
  }

  if (status === 'error') {
    return <pre>Error: {error.message}</pre>;
  }

  if (status === 'settled') {
    return (
      <pre onClick={() => handleClick()}>
        Sttled: {JSON.stringify(result, null, 2)}
      </pre>
    );
  }

  return <pre>Unexpected Error!</pre>;
}

export default Home;
