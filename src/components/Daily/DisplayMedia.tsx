import React from "react";
import styles from './DisplayMedia.module.css';
import { Oval } from "react-loader-spinner";

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
  explanation,
  media_type,
  title,
  url,
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoading = () => {
    setLoaded(true);
  };

  return (
    <div className={styles['display-media']}>
      <h1>Photo of the day</h1>
      <h2>{title || "Loading..."}</h2>
      {media_type === "image" && url && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {!loaded && <Oval color="#00BFFF" height={50} width={50} />}
          <img
            src={url}
            alt={title || "NASA Image"}
            onLoad={handleLoading}
            style={{ display: loaded ? "block" : "none" }}
          />
        </div>
      )}
      {media_type === "video" && url && (
        <div>
          <iframe
            title="NASA Video"
            width="560"
            height="315"
            src={url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {copyright && <p>&copy;{copyright}</p>}
      <p>{explanation || "Fetching data..."}</p>
    </div>
  );
};

export default DisplayMedia;