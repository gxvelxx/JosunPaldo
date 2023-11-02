import React, { useEffect, useRef, useState } from "react";

function InfiniteScrollComponent() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(
      handleObserver,
      options
    );
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      fetchMoreItems();
    }
  }, [loading]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setLoading(true);
    }
  };

  const fetchMoreItems = async () => {
    // API 호출 로직
    const newItems = await fetchItems(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const fetchItems = async (page) => {
    // API 호출하여 데이터 가져오기
    // 예시로 setTimeout 사용
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Array.from(
            { length: 10 },
            (_, i) => `Item ${page * 10 + i}`
          )
        );
      }, 1000);
    });
  };

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div
        ref={loader}
        style={{
          height: "100px",
          border: "1px solid black",
        }}
      >
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default InfiniteScrollComponent;
