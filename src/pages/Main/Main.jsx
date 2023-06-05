import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { StarshipData } from '../../components/StarshipData/StarshipData';

const Loader = () => (<h1 style={{ position: 'relative', marginTop: '10rem', color: 'gold', fontSize: '2rem', fontWeight: '100', textAlign: 'center' }}>Loading...</h1>);

const element = <FontAwesomeIcon icon={faJedi} />;

const EndMessage = () => (
  <p style={{ display: 'flex', color: 'gold', flexDirection: 'column', fontSize: '1.3rem', gap: '8px', textAlign: 'center' }}>
    All starships successfully loaded!
    <span>{element}</span>
  </p>
);

export const Main = () => {
  const [page, setPage] = useState(1);
  const [viewMore, setViewMore] = useState(true);
  const [starship, setStarship] = useState([]);

  const fetchSpaceships = () => {
    axios.get(`https://swapi.dev/api/starships/?page=${page}`).then((res) => {
      setStarship((prevStarship) => {
        const newStarships = res.data.results.filter((ship) => {
          return !prevStarship.some((prevShip) => prevShip.url === ship.url);
        });
        return prevStarship.concat(newStarships);
      });
    });
  };

  const scrollLoading = () => {
    axios.get(`https://swapi.dev/api/starships/?page=${page}`).then((res) => {
      setViewMore(res.data.next !== null);
    });
  };

  useEffect(() => {
    fetchSpaceships();
    scrollLoading();
  }, [page]);
  
  const handleNext = () => setPage((prevPage) => prevPage < 4 ? prevPage + 1 : prevPage);
  
  return (
    <div>
      <InfiniteScroll
        dataLength={starship.length}
        next={handleNext}
        hasMore={viewMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        <div className='starshipCard'>
          {starship.map(({ model, name, url }, index) => (
            <StarshipData key={`${url}-${index}`} name={name} model={model} url={url} />
          ))}
        </div>
      </ InfiniteScroll>
    </div>
  );
};
