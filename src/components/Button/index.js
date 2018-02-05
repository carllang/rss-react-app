import React from 'react'
import StyledButton from './StyledButton'

const Button = props => <StyledButton onClick={(e) => props.onClickAddFeed(e)} className="fa fa-search">{props.children}</StyledButton>

export default Button;
