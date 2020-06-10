import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ToggleLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.to);
        return (
            <Route to={this.props.to} exact={this.props.exact}
                children={routeProps => {
                    const baseClass = this.props.className || '';
                    const activeClass = this.props.activeClass || 'active';
                    const inActiveClass = this.props.activeClass || '';
                    debugger
                    const combinedClass = `${baseClass} ${routeProps.match.path === this.props.to ? activeClass : inActiveClass}`;

                    return <li className={`nav-item  ${combinedClass}`}>
                                <Link className="nav-link" to={this.props.to} style={{ fontSize: '1.3rem' }}>{this.props.children}</Link>
                           </li>
                }}
            />
        );
    }
}

export default ToggleLink;