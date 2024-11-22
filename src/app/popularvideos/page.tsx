// pages/popularvideos.tsx

'use client';

import React, { useEffect, useState } from 'react';

interface Video {
  url: string;
}

const AllVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        const data = await response.json();

        if (data.videos) {
          setVideos(data.videos);
        } else {
          setError('Failed to fetch videos');
        }
      } catch (err) {
        setError('Failed to fetch videos');
        console.error(err);
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.slice(0, 6).map((video, index) => (
          <div key={index} className="flex justify-center items-center">
            <iframe
              className="w-full h-56 sm:h-64 lg:h-80"
              src={`${video}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
