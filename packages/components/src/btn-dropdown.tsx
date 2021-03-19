import React from 'react'
import { Popover2 } from '@blueprintjs/popover2'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
`

const Btn = styled.button``

const DropdownBtn = styled.div``

interface Props {
  btnElement: React.ReactElement
  dropdownBtnElement: React.ReactElement
  dropdownElement: React.ReactElement
}

export function BtnDropdown(props: Props) {
  const { btnElement, dropdownBtnElement, dropdownElement } = props
  return (
    <Div>
      <Btn>{btnElement}</Btn>
      <Popover2>
        <DropdownBtn>{dropdownBtnElement}</DropdownBtn>
        {dropdownElement}
      </Popover2>
    </Div>
  )
}
