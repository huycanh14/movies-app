// class ErrorBoundary extends React.Component<{ errorUI: React.ReactNode }, { hasError: boolean, message: string }>{
    
// }
import React from 'react';
class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState>{
    constructor(props: errorBoundaryProps) {
        super(props);
        this.state = {hasError: false, message: ''}
    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true, message: error.message}
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.errorUI) {
                return this.props.errorUI;
            } else {
                return <h3>{ this.state.message}</h3>
            }
        } else {
            return this.props.children;
        }
    }
    
}
export default ErrorBoundary;

interface errorBoundaryProps{
    errorUI: React.ReactNode;

}

interface errorBoundaryState{
    hasError: boolean;
    message: string;
}