import React, { FC } from 'react'

type ProgressBarProps = {
    value: number
    showPercentage?: boolean
}

const ProgressBar: FC<ProgressBarProps> = ({ value, showPercentage = false }) => {
    const normalizedValue = Math.min(100, Math.max(0, +value));

    return (
        <div role="progressbar"
            aria-valuenow={normalizedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${normalizedValue}%`}
            style={{ width: '100%', backgroundColor: '#e0e0de', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{
                height: '15px',
                width: `${normalizedValue}%`,
                backgroundColor: '#42650B',  
                // backgroundColor: normalizedValue > 50 ? 'green' : 'red',  
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                transition: 'width 0.3s ease-in-out'
            }}>
                {showPercentage && `${normalizedValue}%`}
            </div>
        </div>
    )
}

export default ProgressBar