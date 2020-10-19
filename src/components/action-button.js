import React from 'react'
import Button from './Button'
import Text from './Text'

export function ActionButton({ children, ...props }) {
  return (
    <Button
      minWidth="actionButton"
      height="actionButton"
      borderRadius="full"
      bg="white"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.16,
        shadowRadius: 24
      }}
      px={10}
      {...props}
    >
      {children}
    </Button>
  )
}

export function ActionTitle({ children, ...props }) {
  return (
    <Text color="textLight" fontWeight="bold" mr={8} {...props}>
      {children}
    </Text>
  )
}
