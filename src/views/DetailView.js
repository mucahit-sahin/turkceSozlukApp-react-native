import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'

import Box from '../components/Box'
import Text from '../components/Text'
import { ActionButton, ActionTitle } from '../components/action-button'
import {
  Bookmark,
  BookmarkSolid,
  Hand,
  More,
  Volume
} from '../components/icons'
import {
  DetailSummaryItemContainer,
  DetailSummaryItemSummary,
  DetailSummaryItemTitle
} from '../components/detail-summary-item'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Detay
          </Text>
          <Text color="textLight" mt={10}>
            arapça kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton>
            <Volume width={24} height={24} color="blue" />
          </ActionButton>
          <ActionButton ml={12}>
            <BookmarkSolid width={24} height={24} color="blue" />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color="blue" />
            <ActionTitle>Türk işaret dili</ActionTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
              çok eskiden kullanulan ve değeri bir kuruşun dörtte biri olan
              bozukluk.
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              on para on aslanın ağzında
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              çok eskiden kullanulan ve değeri bir kuruşun dörtte biri olan
              bozukluk.
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              on para on aslanın ağzında
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}
export default DetailView
