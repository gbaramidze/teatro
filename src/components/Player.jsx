"use client"
import React, {useEffect, useState} from "react";

const SpotifyTracksEmbed = ({artistName}) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!artistName) return;

    const fetchTracks = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/spotify/tracks?artist=${encodeURIComponent(artistName)}`);
        const data = await res.json();
        setTracks(data.tracks || []);
      } catch (error) {
        console.error("Ошибка при загрузке треков:", error);
        setTracks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [artistName]);

  if (loading) return null;
  if (!tracks.length) return null;

  return (
    <div style={{
      display: "grid",
      gap: "24px",
      margin: '20px 0',
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))"
    }}>
      {tracks.map((track) => (
        <div
          key={track.iframeUrl}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={track.image}
            alt={track.name}
            style={{width: "100%", borderRadius: "8px", marginBottom: "12px"}}
          />
          <h3 style={{fontSize: "16px", margin: "0 0 8px"}}>{track.name}</h3>
          <iframe
            src={track.iframeUrl}
            width="100%"
            height="90"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{borderRadius: "8px"}}
            scrolling={"no"}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default SpotifyTracksEmbed;
