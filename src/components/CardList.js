import React, { useState } from 'react';
import Comparison from './Comparison';

const CardList = ({ robots }) => {

    const [marked, setMarked] = useState({})
    const [compare, setCompare] = useState([])

    const checkMark = (index) => {

        if (compare.length < 2 && marked["" + index] === undefined) {
            const newMarked = { ...marked };
            newMarked["" + index] = true;
            setMarked(newMarked);
            setCompare(oldArray => [...oldArray, robots[index]])
        } else if (compare.length <= 2 && marked["" + index]) {
            marked["" + index] = false;
            const newArray = compare.filter((item) => item.name !== robots[index].name);
            setCompare(newArray)
        } else if (compare.length === 2 && !marked["" + index]) {
            alert('You can only choose 2 to compare');
        } else {
            marked["" + index] = true;
            setCompare(oldArray => [...oldArray, robots[index]])
        }

    }

    return (
        <div className='cardlist-container'>
            {
                compare.length != 2 ?
                    <h3>Pick 2 Character To Compare</h3>
                    :
                    <Comparison compare={compare} />
            }
            {
                robots.map((robot, i) => {
                    return (
                        <>
                            {
                                marked["" + i] ?
                                    <div onClick={() => checkMark(i)} className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
                                        <div className='img-center'>
                                            <img alt='robots' src={robot.image} className="h5" />
                                            <div className='text-on-image'>
                                                <h1>✅</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h2>{robot.name}</h2>
                                        </div>
                                    </div>
                                    :
                                    <div onClick={() => checkMark(i)} className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
                                        <div className='img-center'>
                                            <img alt='robots' src={robot.image} className="h5" />
                                        </div>
                                        <div>
                                            <h2>{robot.name}</h2>
                                        </div>
                                    </div>
                            }
                        </>
                    );
                })
            }
        </div>
    );
}

export default CardList;