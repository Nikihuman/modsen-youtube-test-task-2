import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: 'red', height: '100px', minWidth: '100px' }}>
          Sorry.. there was an error
        </div>
      );
    }

    return this.props.children;
  }
}
