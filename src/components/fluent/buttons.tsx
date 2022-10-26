import * as React from 'react'
import { DefaultButton, IButtonProps, PrimaryButton } from '@fluentui/react/lib/Button'

export const FluentDefaultButton: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <>
      <DefaultButton {...props} />
    </>
  )
}

export const FluentPrimaryButton: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <>
      <PrimaryButton {...props} />
    </>
  )
}
