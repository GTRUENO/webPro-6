import React from 'react'
import '../P58.css'
import { useNavigate } from 'react-router-dom'

const P58Button = () => {

    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/59')
    }

    return (
        <div>
            <button className="next-button" onClick={handleNext}>
                다음
            </button>
        </div>
    )
}

export default P58Button