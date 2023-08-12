import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Word = () => {
    const [word] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
    const navigate = useNavigate();

    const btnClick = (word) => {
        navigate('/letter', { state: { word } });
    }
    return (
        <div>
            <div className="word">
                {
                    word.map((item, index) => {
                        return <p onClick={() => btnClick(item)} key={index}>{item} /</p>
                    }
                )}
            </div>
        </div>
    )
}

export default Word