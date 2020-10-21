import React from 'react'
import Box from './Box'

export function LoaderText({ children, border, ...props }) {
  return <Box bg="light" width={120} height={10} {...props}></Box>
}
