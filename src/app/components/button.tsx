import { cn } from "../libs/utils";
import React from "react";

type ButtonProps = (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
) & {
    variant?: 'primary' | 'secondary';
    size?: 'md' | 'sm';
    icon?: React.ReactNode;
    className?: string;
};

export default function Button({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon, 
    as = 'button',
    ...props 
}: ButtonProps) {
    
    const variants = {
        primary: "bg-[var(--accent-action)] text-white hover:bg-[var(--accent-hover)]",
        secondary: "border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--bg-subtle)]",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm"
    }

    // Use React.ElementType to allow the dynamic tag assignment
    const Component = (as as React.ElementType);

    return (
        <Component
            {...props}
            className={cn(
                "flex items-center justify-center gap-2 rounded-sm transition-all font-sans",
                sizes[size],
                variants[variant],
                className
            )}
        >
            {icon && <span>{icon}</span>}
            {children}
        </Component>
    );
}