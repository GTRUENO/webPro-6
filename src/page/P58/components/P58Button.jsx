import React from 'react'
import '../P58.css'
import { useNavigate } from 'react-router-dom'

const P58Button = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/59')
    }

    return (
        <div>
            <button className="next-button" onClick={handleSubmit}>
                제출
            </button>
        </div>
    )
}

export default P58Button