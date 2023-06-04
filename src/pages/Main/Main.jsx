import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { StarshipData } from '../../components/StarshipData/StarshipData';

export const Main = () => {
  const element = <FontAwesomeIcon icon={faJedi} />;
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

  return (
    <div>
      <InfiniteScroll
        dataLength={starship.length}
        next={() => setPage((prevPage) => prevPage < 4 ? prevPage + 1 : prevPage)}
        hasMore={viewMore}
        loader={<h1 style={{ position: 'relative', marginTop: '10rem', color: 'gold', fontSize: '2rem', fontWeight: '100', textAlign: 'center' }}>Loading...</h1>}
        endMessage={
          <p style={{ color: 'gold', fontSize: '1.3rem', textAlign: 'center' }}>
            All starships successfully loaded!
            <br />
            <br />
            {element}
          </p>
        }
      >
        <div className='starshipCard'>
          {starship.map((ship, index) => (
            <StarshipData key={`${ship.url}-${index}`} name={ship.name} model={ship.model} url={ship.url} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
