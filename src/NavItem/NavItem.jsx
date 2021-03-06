import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import {large} from '../styles/media-queries'

let style = {
  base: {
    display: 'block',
    fontSize: '1.2rem',
    height: 'auto',
    lineHeight: 'normal',
    opacity: 0,
    textAlign: 'left',
    transition: 'opacity .25s, visibility 0s .25s',
    verticalAlign: 'middle',
    visibility: 'hidden',
    [large]: {
      display: 'inline-block',
      lineHeight: '2em',
      opacity: 1,
      visibility: 'visible'
    }
  },
  open: {
    opacity: 1,
    transition: 'opacity .25s',
    visibility: 'visible'
  },
  a: {
    base: {
      display: 'block',
      padding: '.5em 1em',
      textAlign: 'center',
      [large]: {
        padding: '0 .5em',
        textAlign: 'left'
      }
    }
  }
}

@Radium
export class NavItem extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    navIsOpen: PropTypes.bool.isRequired,
    section: PropTypes.object
  }

  handleClick (event) {
    const {handleClick} = this.props

    handleClick(event)
  }

  render () {
    const {navIsOpen, section} = this.props

    return (
      <li style={[
        style.base,
        navIsOpen && style.open
      ]}>
        <a href={'/' + section.title.toLowerCase()}
          style={[
            style.a.base
          ]}
          onClick={::this.handleClick}
        >{section.navTitle}</a>
      </li>
    )
  }
}