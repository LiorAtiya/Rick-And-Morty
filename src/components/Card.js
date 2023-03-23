import React from 'react';

const Card = ({ character }) => {

    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5'>
            <div className='img-center'>
                <img alt='robots' src={character.image} className="h4" />
            </div>
            <div>
                <h3>{character.name}</h3>
                <p>Gender: {character.gender}</p>
            </div>
        </div>
    );
}

export default Card;