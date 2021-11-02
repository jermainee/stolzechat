import React, {ReactNode} from 'react';

export default class InputBar extends React.Component {
    public render(): ReactNode {
        return (
            <div style={{ position: "fixed", bottom: 0, padding: "1rem", width: "100%" }}>
                <div className="columns is-mobile">
                    <div className="column">
                        <input className="input is-fullwidth" placeholder="Type your message ..." />
                    </div>

                    <div className="column is-narrow">
                        <button className="button">↳</button>
                    </div>
                </div>
            </div>
        );
    }
}
