import React from 'react';

interface StarProps {
    filled: boolean; //required 
    onClick?: () => void; // Optional click handler for the star
    onMouseEnter?: () => void; // Optional mouse enter handler for hover effects
    onMouseLeave?: () => void; // Optional mouse leave handler for hover effects
    size?: number; // Option to change Size of the star (width and height)
}

const Star: React.FC<StarProps> = ({ 
    filled, 
    onClick, 
    onMouseEnter, 
    onMouseLeave, 
    size = 24 
}) => {
    return (
        <svg
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? '#FFA500' : 'none'} //color for filled or outlined state
            stroke="#FFA500" // outline color of the star
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer transition-transform transform hover:scale-110"
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    );
};

export default Star;
