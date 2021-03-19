import React from 'react'

import { Spinner as Spinner_ } from '@blueprintjs/core'

interface Props {
  marginLeft?: number
  size?: number
}

export function Spinner(props: Props) {
  const { marginLeft = '10px', size = 14 } = props
  return (
    <div
      style={{
        marginLeft,
      }}
    >
      <Spinner_ size={size}></Spinner_>
    </div>
  )
}
