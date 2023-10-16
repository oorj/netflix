import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TvCast = ({ tvId, apiKey }) => {
  const [credits, setCredits] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
    let { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`;
        const response = await fetch(url);
        const data = await response.json();
        setCredits(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    };

    fetchCredits();
  }, [tvId, apiKey]);

return (
    <div className='cast'>
        <h2>Cast</h2>
        <div class="actor">
          {credits.cast &&
            credits.cast.map((actor) => (
              <div key={actor.id}>
                <div className="tv-img"
                  style={{
                    backgroundImage:
                      "url(" +
                      `  https://www.themoviedb.org/t/p/w300_and_h300_face${actor.profile_path}` +
                      ")",
                  }}
                ></div>
                <p className='name'>{actor.name}</p>
                <p className='tv-name'>{actor.character} <span>역</span></p>
              </div>
            ))}
      </div>
      <h2>Crew</h2>
      <div class="director">
          {credits.crew &&
            credits.crew.map((crewMember) => (
              <div key={crewMember.id}>
                <p>
                  {crewMember.name} ({crewMember.job})
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};
export default TvCast;
