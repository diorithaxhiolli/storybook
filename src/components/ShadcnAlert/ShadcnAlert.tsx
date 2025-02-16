import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ShadcnAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  shadcnicon?: React.ReactNode;
  withCloseButton?: boolean;
  variant?: 'filled' | 'outlined';
}

export const ShadcnAlert: React.FC<ShadcnAlertProps> = ({
  type,
  title,
  description,
  shadcnicon,
  withCloseButton = true,
  variant = 'filled',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Close alert when user presses ESC
      const handleEscapeKey = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
              setIsVisible(false);
          }
      };
  
      useEffect(() => {
          document.addEventListener('keydown', handleEscapeKey);
          return () => {
              document.removeEventListener('keydown', handleEscapeKey);
          };
      }, []);

  const getAlertStyle = () => {
    const baseClasses = `flex items-center p-4 rounded-lg shadow-md`;

    // Define styles based on the type and variant (filled vs outlined)
    const typeClasses = {
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800',
    };

    const variantClasses = variant === 'outlined' ? 'border-2' : 'p-4';

    return `${baseClasses} ${typeClasses[type]} ${variantClasses}`;
  };

  if (!isVisible) return null; // Do not render the alert if it’s closed

  return (
    <div className={getAlertStyle()} role="alert" aria-live="assertive">
      {shadcnicon && <div className="mr-2">{shadcnicon}</div>}
      <div>
        <h4 className="font-semibold">{title}</h4>
        {description && <p>{description}</p>}
      </div>
      {withCloseButton && (
        <button
          className="ml-auto p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close alert"
          onClick={() => setIsVisible(false)} // Close the alert
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};