import styled from 'styled-components'

const StyledButton = styled.button`
  border: 2px solid #000000;
  color: ${props => props.theme.buttonPrimaryTextColor};
  background-color: ${props => props.theme.buttonBackgroundColour};
  background-size: 20px 20px;
  padding: 10px;
  width: 30%;
  cursor: pointer;
`

export default StyledButton
