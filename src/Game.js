import React, { useState, useEffect } from 'react';

function Game() {
    const [boxes, setBoxes] = useState(Array(9).fill(''));
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [keywordIndex, setKeywordIndex] = useState(-1);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
                const randomIndex = Math.floor(Math.random() * 9);
                setKeywordIndex(randomIndex);
                setBoxes(prevBoxes => {
                    const newBoxes = [...prevBoxes];
                    newBoxes[randomIndex] = "hit";
                    return newBoxes;
                });
                setTimeout(() => {
                    setBoxes(prevBoxes => {
                        const updatedBoxes = [...prevBoxes];
                        updatedBoxes[randomIndex] = "";
                        return updatedBoxes;
                    });
                    setKeywordIndex(-1);
                }, 1000);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleClick = (index) => {
        if (index === keywordIndex) {
            setScore(score + 5);
        } else {
            setScore(score - 2.5);
        }
        const newBoxes = [...boxes];
        newBoxes[keywordIndex] = "";
        setBoxes(newBoxes);
        setKeywordIndex(-1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', justifyContent: 'center' }}>
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            width: '100px',
                            height: '100px',
                            border: '1px solid black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '20px',
                            cursor: 'pointer',
                            backgroundColor: index === keywordIndex ? '#FFD700' : ''
                        }}
                        onClick={() => handleClick(index)}
                    >
                        {box}
                    </div>
                ))}
            </div>
            <div>Time Left: {timeLeft} seconds</div>
            <div>Score: {score}</div>
        </div>
    );
}

export default Game;
