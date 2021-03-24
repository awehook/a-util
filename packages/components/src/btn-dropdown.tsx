import React from 'react'
import { Popover2 } from '@blueprintjs/popover2'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
`

const DropdownBtn = styled.div``

interface Props {
  className?: string
  btnElement: React.ReactElement
  dropdownBtnElement: React.ReactElement
  dropdownElement: React.ReactElement
}

export function BtnDropdown(props: Props) {
  const { className, btnElement, dropdownBtnElement, dropdownElement } = props
  return (
    <Div className={className}>
      {btnElement}
      <Popover2>
        {dropdownBtnElement}
        {dropdownElement}
      </Popover2>
    </Div>
  )
}
