import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'

import Box from '../components/Box'
import Text from '../components/Text'
import { ActionButton, ActionTitle } from '../components/action-button'
import { Bookmark, Hand, Volume } from '../components/icons'
import DetailSummaryItem from '../components/detail-summary-item'
import { LoaderText } from '../components/LoaderText'

function DetailView({ route }) {
  const keyword = route.params?.keyword
  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          <Text color="textLight" mt={10}>
            {data?.telaffuz} {data?.lisan}
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Volume width={24} height={24} color="blue" />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Bookmark width={24} height={24} color="blue" />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <Hand width={24} height={24} color="blue" />
            <ActionTitle>Türk işaret dili</ActionTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItem data={item} border={item.anlam_sira !== 1} />
              ))
            : [1, 2, 3].map((index) => (
                <DetailSummaryItem border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}

          {/* <DetailSummaryItemContainer order type>
            <DetailSummaryItemTitle>
              çok eskiden kullanulan ve değeri bir kuruşun dörtte biri olan
              bozukluk.
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              on para on aslanın ağzında
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border order type>
            <DetailSummaryItemTitle>
              çok eskiden kullanulan ve değeri bir kuruşun dörtte biri olan
              bozukluk.
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              on para on aslanın ağzında
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer> */}
        </Box>
      </Box>
    </Box>
  )
}
export default DetailView
