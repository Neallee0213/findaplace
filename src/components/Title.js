import React from 'react'

const Title = ({ title, size }) => {
    return (
        <div className="section-title"
            style={{
                padding: "100px 0 50px 0"
            }}
        >
            <h4
                style={{
                    fontWeight: "300",
                    fontSize: `${size}`,
                    // fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "3px"
                }}
            >{title}</h4>
            <div />
        </div>
    )
}

export default Title
