import React, {ReactNode} from 'react';
import {IAppProps} from "../App";

interface IThread {
    identifier: string;
    text: string;
    timestamp: number;
}

export default class Feed extends React.Component<IAppProps> {
    private readonly blockName = 'feed';

    private threads: IThread[] = [
        {
            identifier: '023hehe8h20e328hedh02dh',
            text: 'muss erst ein chaya klären aller, wo bekommt man welche?',
            timestamp: 1635872831,
        },
        {
            identifier: 'werjjew0ßdj9ewe9dwj99jw',
            text: 'könnt ihr mal bitte die musik im aufenthaltsraum lauter machen?!',
            timestamp: 1635873810
        },
        {
            identifier: 'cccc4274642e030e095c2474108d7830',
            text: 'nur wenn du geil bist perleeeeeeeee',
            timestamp: 1635873810
        },
        {
            identifier: '23049ß94832ß482493934',
            text: 'Lass ma einen pien, wer ist am start?',
            timestamp: 1635872810
        },
        {
            identifier: '023hehe8h20e328hedh02dh',
            text: 'muss erst ein chaya klären aller, wo bekommt man welche?',
            timestamp: 1635872831,
        },
        {
            identifier: 'werjjew0ßdj9ewe9dwj99jw',
            text: 'könnt ihr mal bitte die musik im aufenthaltsraum lauter machen?!',
            timestamp: 1635873810
        },
        {
            identifier: 'fc59002496961f7dcb2ae9f3b639f634',
            text: 'nur wenn du geil bist perleeeeeeeee',
            timestamp: 1635873810
        },
        {
            identifier: '23049ß94832ß482493934',
            text: 'Lass ma einen pien, wer ist am start?',
            timestamp: 1635872810
        },
    ];

    public render(): ReactNode {
        console.log(this.props.browserIdentifier);
        return (
            <section className={this.blockName} style={{ marginTop: '1rem', marginBottom: '5rem' }}>
                {this.threads.map((thread, index) => this.renderArticle(thread, index))}
            </section>
        );
    }

    private renderArticle = (thread: IThread, index: number) => {
        const isYou = this.props.browserIdentifier === thread.identifier;

        return (
            <div key={index}
                 className={`box ${isYou ? 'has-background-primary-light': ''}`}
                 style={{ marginBottom: '.5rem' }}
            >
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <div>
                                <small><strong>{isYou ? 'you' : thread.identifier}</strong></small>
                            </div>

                            {thread.text}

                            <div className="has-text-right">
                                <small className="has-text-grey-light">{this.renderDate(thread.timestamp)}</small>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    private renderDate = (unixTimestamp: number): string => {
        const milliseconds = unixTimestamp * 1000;
        const dateObject = new Date(milliseconds);

        return dateObject.toLocaleString();
    }
}
