import React from 'react';
import animals from './data';
import AnimalCard from './AnimalCard';

export default function Exercise19() {
  const showAdditionalData = (additional) => {
    const alertInformation = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(alertInformation);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Exercise 19: Animals (PropTypes)</h1>
      <div className="row g-4">
        {animals.map((animal) => (
          <div className="col-md-4" key={animal.name}>
            <AnimalCard
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              showAdditional={showAdditionalData}
              image={animal.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}