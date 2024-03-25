import React, { useState, useEffect } from 'react';

 export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) return;

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const fetchData = async () => {
    setLoading(true);
    // Simulated API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    const data = await response.json();
    setItems(prevItems => [...prevItems, ...data]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      setLoading(true);
    }
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
          <img src={item.thumbnailUrl} alt={item.title} style={{ marginRight: '10px' }} />
          {item.title}
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}


