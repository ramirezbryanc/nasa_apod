import React from 'react';
import DisplayMedia from './components/DisplayMedia';
import './App.css'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = React.useState({
    copyright: null,
    date: null,
    explanation: null,
    hdurl: null,
    media_type: null,
    service_version: null,
    title: null,
    url: null,
  });
  
  React.useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => res.json()).then(
      data => {
        setData({
          copyright: data.copyright,
          date: data.date,
          explanation: data.explanation,
          hdurl: data.hdurl,
          media_type: data.media_type,
          service_version: data.service_version,
          title: data.title,
          url: data.url
        })
      }
    )
  }, [])

  console.log(data);

  return (
    <>
    <h1>Astronomy Pictures by NASA</h1>
    <p>View the daily photos from NASA's APOD API.</p>
    <p>You can also choose to view a photo from a previous date, or several photos from a date range.</p>
    <DisplayMedia {...data}/>
    </>
  )
}

export default App
