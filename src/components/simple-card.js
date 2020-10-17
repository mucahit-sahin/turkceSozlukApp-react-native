import React from 'react'
import Text from './Text'

import Box from './Box'
import Button from './Button'

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Button
      justifyContent="flex-start"
      bg="white"
      borderRadius="normal"
      py={16}
      {...props}
    >
      {children}
    </Button>
  )
}
export function SimpleCardTitle({ children }) {
  return (
    <Text pl={10} fontSize={16} fontWeight="bold">
      {children}
    </Text>
  )
}
