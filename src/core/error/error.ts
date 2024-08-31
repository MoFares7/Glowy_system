import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {

}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught in error boundary:', error, errorInfo);

    }

    render(): ReactNode {
        if (this.state.hasError) {
            return '';
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
