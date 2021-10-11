import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const About = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hero, setHero] = useState({});
  const { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setHero(result[0]);
        setIsLoaded(true);
      });
  }, []);
  if (error)
    return (
      <div>
        <button onClick={() => history.goBack()}>Get Back</button>
        <br></br>
        <h1>{error.message}</h1>
      </div>
    );
  if (!isLoaded)
    return (
      <div>
        <button onClick={() => history.goBack()}>Get Back</button>
        <br></br>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      <button onClick={() => history.goBack()}>Get Back</button>
      <br></br>
      <h1>{hero.name}</h1>
    </div>
  );
};

export default About;
