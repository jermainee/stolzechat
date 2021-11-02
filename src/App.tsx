import React, {ReactNode} from 'react';

interface IAppProps {
    browserIdentifier: null|string;
}

export default class App extends React.Component<IAppProps> {
    public render(): ReactNode {
        return <>ja moin welt {this.props.browserIdentifier}</>;
    }
}
