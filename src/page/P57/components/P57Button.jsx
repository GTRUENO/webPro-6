import React from 'react'
import '../P57.css'
import { useNavigate } from 'react-router-dom'

const P57Button = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/58')
    }

    return (
        <div>
            <button className="next-button" onClick={handleSubmit}>
                다음
            </button>
        </div>
    )
}

export default P57Button