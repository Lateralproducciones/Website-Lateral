"use client";

import 'slick-carousel/slick/slick.css';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div 
      className={`${className} custom-arrow`} 
      style={{position:'absolute', zIndex:1, top:'50%', transform: 'translateY(-50%)', left:'-3%', cursor:'pointer', }} 
      onClick={onClick}
    >
      <span className="visually-hidden">Previous Slide</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27px"
        height="57px"
        viewBox="0 0 27 57"
        fill="#010101"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
      </svg>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div 
      className={`${className} custom-arrow`} 
      style={{position:'absolute', zIndex:1, top:'50%', transform: 'translateY(-50%)', right:'-3%', cursor:'pointer',}} 
      onClick={onClick}
    >
      <span className="visually-hidden">Next Slide</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27px"
        height="57px"
        viewBox="0 0 27 57"
        fill="#010101"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
      </svg>
    </div>
  );
};

export const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram-feed');
        if (!response.ok) {
          throw new Error('Error fetching posts');
        }
        const data = await response.json();

        const duplicatedData = data.length < 4 ? [...data, ...data] : data;
        setPosts(duplicatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="instagram-feed">
    {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Slider {...settings} className="gap">
          {posts.map(post => (
            <div key={post.id}>
              <div className="post">
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  {(post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'IMAGE') && (
                    <img src={post.media_url} alt={post.caption} className="post-image" />
                  )}
                  {post.media_type === 'VIDEO' && (
                    <video controls src={post.media_url} alt={post?.caption} className="post-video" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <style jsx>{`
        .instagram-feed {
          width: 90%;
          max-width: 1200px;
          margin: auto;
          margin-top: 150px;
        }
        .post {
          position: relative;
          overflow: hidden;
          border: 1px solid #ddd;
          border-radius: 10px;
          transition: transform 0.2s;
          height: 379px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }
        .post:hover {
          transform: scale(1.05);
        }
        .post-image,
        .post-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
