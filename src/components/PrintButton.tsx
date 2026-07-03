import { ReactElement } from "react";

export interface PrintButtonProps {
    /**
     * Button text
     */
    label?: string;

    /**
     * Button disabled state
     */
    disabled?: boolean;

    /**
     * Click event
     */
    onClick: () => void;

    /**
     * Optional CSS class
     */
    className?: string;

    /**
     * Optional icon
     */
    icon?: ReactElement;
}

export function PrintButton({
    label = "Print",
    disabled = false,
    onClick,
    className = "",
    icon
}: PrintButtonProps): ReactElement {

    return (
        <button
            type="button"
            className={`epw-print-button ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && (
                <span className="epw-print-button-icon">
                    {icon}
                </span>
            )}

            <span className="epw-print-button-text">
                {label}
            </span>
        </button>
    );
}

export default PrintButton;