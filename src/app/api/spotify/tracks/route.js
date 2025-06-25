// /app/api/spotify/tracks/route.js

export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const artistName = searchParams.get('artist');

  if (!artistName) {
    return Response.json({error: 'Artist name is required'}, {status: 400});
  }

  try {
    // Получаем токен Spotify
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`cb2b8f007df9482b9b21f923131eee39:a1756a16c6df4775b67f221f81cc0401`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const {access_token} = await tokenRes.json();

    // Получаем ID артиста
    const artistRes = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const artistData = await artistRes.json();
    const artist = artistData.artists.items[0];
    if (!artist) {
      return Response.json({error: 'Artist not found'}, {status: 404});
    }

    // Получаем топ треки
    const topTracksRes = await fetch(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const topTracksData = await topTracksRes.json();


    const tracks = topTracksData.tracks.map(track => ({
      name: track.name,
      spotifyUrl: track.external_urls.spotify,
      iframeUrl: track.external_urls.spotify.replace(
        "https://open.spotify.com/track/",
        "https://open.spotify.com/embed/track/"
      ),
      image: track.album.images?.[0]?.url,
    }));


    return Response.json({artist: artist.name, tracks});
  } catch (error) {
    console.error('Spotify error:', error);
    return Response.json({
      error: 'Internal server error',
      spotifyCredentials: {
        clientId: process.env.SPOTIFY_CLIENT_ID || 'Not set',
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET || 'Not set',
      },
      url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`,
      serverError: error.message
    }, {status: 500});
  }
}
