import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PhotosPage = () => {
    const location = useLocation();
    const albumId = new URLSearchParams(location.search).get("albumId");
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => response.json())
            .then((data) => setPhotos(data));
    }, [albumId]);

    return (
        <div class="div-box">
            <h1>PHOTOS FROM ALBUM {albumId}</h1>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotosPage;
