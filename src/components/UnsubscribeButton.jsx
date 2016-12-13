// Libraries
import React from 'react';


class UnsubscribeButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            disabled: nextProps.disabled
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>X</button>
        );
    }

    handleClick() {
        this.props.onClick(this.props.subscriberId);
    }
}

UnsubscribeButton.propTypes = {
    subscriberId: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
};

export default UnsubscribeButton
