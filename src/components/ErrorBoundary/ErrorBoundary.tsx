import { Component, ReactNode } from 'react';
import { StyledWrapperMessage } from './Styles';

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
      return <StyledWrapperMessage>Sorry.. there was an error</StyledWrapperMessage>;
    }

    return this.props.children;
  }
}
