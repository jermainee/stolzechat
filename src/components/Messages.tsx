import React, {ReactNode} from 'react';
import {IMessage} from "../App";

interface IMessagesProps {
    browserIdentifier: string|null;
    messages: IMessage[];
}

export default class Messages extends React.Component<IMessagesProps> {
    private readonly blockName = 'messages';

    public render(): ReactNode {
        return (
            <section className={this.blockName} style={{ marginTop: '1rem', marginBottom: '5rem' }}>
                {this.props.messages.map((message, index) => this.renderMessage(message, index))}
            </section>
        );
    }

    private renderMessage = (message: IMessage, index: number) => {
        const isYou = this.props.browserIdentifier === message.identifier;

        return (
            <div key={index}
                 className={`box ${isYou ? 'has-background-primary-light': ''}`}
                 style={{ marginBottom: '.5rem' }}
            >
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <div>
                                <small><strong>{isYou ? 'you' : message.identifier}</strong></small>
                            </div>

                            {message.text}

                            <div className="has-text-right">
                                <small className="has-text-grey-light">{this.renderDate(message.timestamp)}</small>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    private renderDate = (timestamp: number): string => {
        return new Date(timestamp).toLocaleString();
    }
}
