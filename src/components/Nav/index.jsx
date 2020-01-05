import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import cs from 'classnames'
import { withRouter } from 'react-router-dom'
import './style.less';

export default @withRouter
class extends PureComponent {
    render() {
        const { title, path, Authority } = this.props
        return (
            Authority &&
            <Link
                to={path}
                className={cs({ h1Style: path === this.props.location.pathname })}
            >
                {title}
            </Link>
        )
    }
}