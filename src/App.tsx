import React, {ReactNode} from 'react';
import Messages from "./components/Messages";
import InputBar from "./components/InputBar";
import {io} from "socket.io-client";

export interface IMessage {
    identifier: string;
    text: string;
    timestamp: number;
}

export interface IAppProps {
    browserIdentifier: null|string;
}

interface IAppState {
    messages: IMessage[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);
        this.state = { messages: [] };
    }

    public componentDidMount() {
        fetch(window.location.protocol + "//" + window.location.host + '/history.json')
            .then(response => response.json())
            .then(messages => {
                this.setState({ messages });
                window.scrollTo(0, document.body.scrollHeight);
            })
            .catch(error => console.log(error));

        const socket = io();
        socket.on('chat message', message => {
            this.setState({
                messages: [
                    ...this.state.messages,
                    message
                ]
            });

            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    public render(): ReactNode {
        return (
            <>
                <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <strong>StolzeChat</strong>&nbsp;<small>beta</small>
                        </a>
                    </div>
                </nav>

                <div className="container">
                    <Messages browserIdentifier={this.props.browserIdentifier} messages={this.state.messages}/>
                </div>

                <InputBar browserIdentifier={this.props.browserIdentifier}/>
            </>
        );
    }
}
