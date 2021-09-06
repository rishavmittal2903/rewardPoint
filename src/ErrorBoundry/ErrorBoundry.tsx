import React from "react";

interface IErrorBoundry {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, IErrorBoundry> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error occured!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
