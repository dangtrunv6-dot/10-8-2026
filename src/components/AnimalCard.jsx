import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
  image
}) {
  return (
    <div className="animal-card">
      <img src={image} alt={name} />
      <div className="animal-card-content">
        <h2 className="text-danger fw-bold">{name}</h2>
        <div className="animal-info-box">
          <p><strong>Scientific Name:</strong> {scientificName}</p>
          <p>{size} kg</p>
          <p>{diet.join(', ')}.</p>
        </div>
        <button 
          className="btn btn-danger w-100" 
          onClick={() => showAdditional(additional)}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
    link: 'No Additional Information'
  }
};