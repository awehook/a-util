import React from 'react'
import styled from 'styled-components'

const InputFeedbackDiv = styled.div`
  color: red;
  height: 20px;
  font-size: 12px;
  text-align: right;
  margin: 5px 0;
`

export const InputFeedback = ({ error }) => (
  <InputFeedbackDiv>{error}</InputFeedbackDiv>
)

export const InputGroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
  width: 100%;
`

export const TextInput = ({
  type,
  id,
  error,
  value,
  label = null,
  onChange,
  className = null,
  ...props
}) => {
  const inputProps = {
    id,
    className,
    type,
    value,
    onChange,
    ...props,
  }
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input {...inputProps} />
      <InputFeedback error={error} />
    </>
  )
}

export const TextInputWithButton = ({
  type,
  id,
  error,
  value,
  label = null,
  onChange,
  className = null,
  renderBtn,
  ...props
}) => {
  const inputProps = {
    id,
    className,
    type,
    value,
    onChange,
    ...props,
  }
  return (
    <>
      {label ? <label>{label}</label> : null}
      <InputGroupDiv>
        <input {...inputProps} />
        {renderBtn()}
      </InputGroupDiv>

      <InputFeedback error={error} />
    </>
  )
}
