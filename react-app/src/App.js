import './App.css'
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}></img>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/harshithgowdakt')
      .then(res => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [])

  if (loading) return <h1>Loading .......</h1>
  if (error) return <h1>{JSON.stringify(error)}</h1>
  if (!data) return null;

  return (
    <GithubUser name={data.name}
      location={data.location}
      avatar={data.avatar_url}>
    </GithubUser>
  )
}

export default App;
