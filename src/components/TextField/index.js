import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
    background-color: ${props => props.theme.sage};
    color: ${props => props.theme.black};
    padding: 10px;
    border-color: ${props => props.theme.black};
    border: solid 2px;
    margin-right: 5%;
    width: 65%;
`
const TextField = (props) => <StyledInput type="text" name={props.name} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} onFocus={() => props.resetInput()} />

TextField.propTypes = {
    name: PropTypes.string.isRequired
} 

export default TextField;
