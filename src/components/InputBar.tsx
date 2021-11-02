import React, {ReactNode} from 'react';
import {io} from "socket.io-client";

interface IInputBarState {
    message: string;
}

export default class InputBar extends React.Component<{}, IInputBarState> {

    public constructor(props: {}) {
        super(props);
        this.state = { message: '' };
    }

    public render(): ReactNode {
        return (
            <div style={{ position: "fixed", bottom: 0, padding: "1rem", width: "100%" }}>
                <div className="columns is-mobile">
                    <div className="column">
                        <input className="input is-fullwidth"
                               placeholder="Type your message ..."
                               onChange={this.handleInputChange}
                               value={this.state.message}
                        />
                    </div>

                    <div className="column is-narrow">
                        <button className="button" onClick={this.handleSubmit}>↳</button>
                    </div>
                </div>
            </div>
        );
    }

    private handleInputChange = (event: any) => {
        event.preventDefault();
        this.setState({ message: event.target.value });
    }

    private handleSubmit = (event: any) => {
        event.preventDefault();

        if (this.state.message.length > 0) {
            const socket = io(':3001');

            socket.emit('chat message', this.state.message);
            this.setState({ message: '' });
        }
    }
}
