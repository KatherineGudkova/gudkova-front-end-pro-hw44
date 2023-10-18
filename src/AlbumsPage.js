import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const AlbumsPage = () => {
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get("userId");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setAlbums(data));
    }, [userId]);

    return (
        <div class="div-box">
            <h1>USER {userId} ALBUMS</h1>
            <ol>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos?albumId=${album.id}`}>
                            <button>PHOTOS</button>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default AlbumsPage;
