import {useSWR} from 'swr';

function YourComponent() {
  // Define a function to fetch data
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  // Specify the API route URL
  const apiUrl = '/api/committee'; // Use the relative path to the API route

  // Use SWR to fetch and manage the data
  const { data, error } = useSWR(apiUrl, fetcher);

  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default YourComponent;
