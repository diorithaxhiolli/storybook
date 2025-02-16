import React, { useEffect } from 'react';
import './Alert.css';
import { X } from 'lucide-react';

export interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    description: string;
    title?: string;
    icon?: React.ReactNode;
    closeable?: boolean;
    variant?: 'filled' | 'outlined';
}

const Alert: React.FC<AlertProps> = ({ type, description, title, icon, closeable, variant = 'filled' }) => {
    const [closed, setClosed] = React.useState(false);

    // Close alert when user presses ESC
    const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setClosed(true);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    const alertClass = variant === 'filled' 
        ? `alert alert-${type}-filled`
        : `alert alert-outlined alert-${type}-outlined`;

    return (
        <div className={alertClass} style={{ display: closed ? 'none' : 'block' }}>
            <div className="alert-content">
            {icon && <div className="alert-icon">{icon}</div>}
                {title && <h4 className="alert-title">{title}</h4>}
                <p className="alert-description">{description}</p>
            </div>
            {closeable && (
                <button className="alert-close" aria-label="Close alert" onClick={() => setClosed(true)}>
                    <X size={15} />
                </button>
            )}
        </div>
    );
};

export default Alert;


