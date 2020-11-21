import React from 'react';

export default function DepoimentCard({ quote, author, image }) {
  return (
    <div className="depoiment-card">
      <blockquote>
        <p>{quote}</p>

        <cite>{author}</cite>
      </blockquote>

      <div
        className="depoiment-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
}
