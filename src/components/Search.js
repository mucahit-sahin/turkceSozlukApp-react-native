import React, { useState } from 'react'
import Box from './Box'
import Input from '../components/Input'
import { Search as SearchIcon, Close } from './icons'
import { Text, Keyboard } from 'react-native'
import Button from './Button'
import theme from '../utils/theme'

function Search() {
  const [isFocus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.1,
            shadowRadius: 24
          }}
          bg="white"
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          height={52}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <SearchIcon color="red" />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default Search
