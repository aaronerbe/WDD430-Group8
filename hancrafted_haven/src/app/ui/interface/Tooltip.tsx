// Tooltip.tsx
import React, { ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;  // Type for children
    text: string;         // Type for tooltip text
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
    return (
        <div className="relative inline-block group">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-sm text-white bg-black rounded-md p-1 whitespace-nowrap z-50 left-1/2 -translate-x-1/2 -translate-y-1 -ml-10">
            {text}
            </div>
        </div>
    );
};

export default Tooltip;
