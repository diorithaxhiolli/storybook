import React from 'react';
import './Alert.css';

export interface AlertProps {
    /* type of alert */
    type: 'success' | 'error' | 'warning' | 'info';
    /* description of alert */
    description: string;
    /* optional title of alert */
    title?: string;
}

const Alert: React.FC<AlertProps> = ({ type, description, title }) => {
    return (
        <div className={`alert alert-${type}`}>
            {title && <h4 className='alert-title'>{title}</h4>}
                <p className='alert-description'>{description}</p>
        </div>
    )
}

export default Alert;