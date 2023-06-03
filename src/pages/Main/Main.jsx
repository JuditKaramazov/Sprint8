import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { StarshipData } from '../../components/StarshipData/StarshipData';

export const StarshipList = () => {

    const element = <FontAwesomeIcon icon={faJedi} />
    const [page, setPage] = useState(1);
    const [viewMore, setViewMore] = useState(true);
    const [starship, setStarship] = useState([]);

    const fetchSpaceships = () => {
        axios
        .get(`https://swapi.dev/api/starships/?page=${page}`)
        .then((res) => {
            setStarship(prevStarship => prevStarship.concat(res.data.results))
        })}

        const scrollLoading = () => {
            axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                res.data.next == null ? setViewMore(false) : setViewMore(true);
            })
        }
        const savedValue = localStorage.getItem('logged');
        const newValue = JSON.parse(savedValue);

        useEffect(() => {
            fetchSpaceships()
            scrollLoading()
        }, [page]);

        return (
            <div>
                {
                    <InfiniteScroll
                    dataLength={starship.length}
                    next={() => setPage(page => page < 4 ? page + 1 : page)}
                    hasMore={viewMore} // Update the prop name from `viewMore` to `hasMore`
                    loader={<h1>Loading...</h1>}
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
                      {starship.map((ship) => (
                        <StarshipData key={ship.url} name={ship.name} model={ship.model} url={ship.url} />
                      ))}
                    </div>
                  </ InfiniteScroll>
                }
            </div>
        )
    };
