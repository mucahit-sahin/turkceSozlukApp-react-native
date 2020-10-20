import React from 'react'
import { ActivityIndicator } from 'react-native'

import Box from './Box'
import { CardContainer, CardSummary, CardTitle } from './card'
import Text from './Text'

export function SuggestionCard({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <ActivityIndicator color="red" />
        )}
      </CardContainer>
    </Box>
  )
}
