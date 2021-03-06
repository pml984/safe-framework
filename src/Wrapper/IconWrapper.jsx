import React, {Component, PropTypes} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export class IconWrapper extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: getMuiTheme()
    }
  }
  
  render () {
    const {children} = this.props

    return (
      <span>
        {children}
      </span>
    )
  }
}