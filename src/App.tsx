import React, {ReactNode} from 'react';
import Feed from "./components/Feed";
import InputBar from "./components/InputBar";

export interface IAppProps {
    browserIdentifier: null|string;
}

export default class App extends React.Component<IAppProps> {
    public render(): ReactNode {
        return (
            <>
                <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <strong>StolzeHaus</strong>
                        </a>
                    </div>
                </nav>

                <div className="container">
                    <Feed browserIdentifier={this.props.browserIdentifier}/>
                </div>

                <InputBar/>
            </>
        );
    }
}
