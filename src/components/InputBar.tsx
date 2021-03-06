import React, {ReactNode} from 'react';
import {io} from "socket.io-client";
import {IAppProps, IMessage} from "../App";

interface IInputBarState {
    message: string;
}

export default class InputBar extends React.Component<IAppProps, IInputBarState> {

    public constructor(props: IAppProps) {
        super(props);
        this.state = { message: '' };
    }

    public render(): ReactNode {
        return (
            <div style={{ position: "fixed", bottom: 0, padding: "1rem", width: "100%" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="columns is-mobile">
                        <div className="column">
                            <input className="input is-fullwidth"
                                   placeholder="Type your message ..."
                                   onChange={this.handleInputChange}
                                   value={this.state.message}
                            />
                        </div>

                        <div className="column is-narrow">
                            <button className="button">↳</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private handleInputChange = (event: any) => {
        event.preventDefault();
        this.setState({ message: event.target.value });
    }

    private handleSubmit = (event: any) => {
        event.preventDefault();

        if (this.state.message.length > 0 && this.props.browserIdentifier) {
            const message: IMessage = {
                identifier: this.props.browserIdentifier,
                text: this.state.message,
                timestamp: Date.now(),
            };

            const socket = io();
            socket.emit('chat message', message);

            this.setState({ message: '' });
        }
    }
}
