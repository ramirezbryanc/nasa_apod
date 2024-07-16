import React from "react";
import styles from './DisplayMedia.module.css';

interface DisplayMediaProps {
  copyright?: string | null;
  date: string | null;
  explanation: string | null;
  hdurl: string | null;
  media_type: string | null;
  service_version: string | null;
  title: string | null;
  url: string | null;
}

const DisplayMedia: React.FC<DisplayMediaProps> = ({
  copyright,
  date,
  explanation,
  hdurl,
  media_type,
  service_version,
  title,
  url,
}) => {
  return (
    <div className={styles['display-media']}>
        <h1>Photo of the day</h1>
        <h2>{title || "Loading..."}</h2>
        {url && <img src={url} alt={title || "NASA Image"} />}
        {copyright && <p>&copy;{copyright}</p>}
        <p>{explanation || "Fetching data..."}</p>
    </div>
  );
};

export default DisplayMedia;