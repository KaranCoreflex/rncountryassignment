import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../sagaapp/store/store'
import MainComponent from './MainComponent'

const ProviderComponent = () => {
  return (
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  )
}

export default ProviderComponent