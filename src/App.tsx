import {
   StyleSheet,
   Text,
   View,
   StatusBar,
   TextInput,
   FlatList, 
   Pressable
}from 'react-native'

import React, { JSX, useState } from 'react'
//SnackBar library for showing alerts
import { Snackbar } from 'react-native-snackbar'
//Components
import CurrencyBtn from './components/buttons'
//Constants
import { currencyByRupee } from './constants'




export default function App():JSX.Element {

  const [inputValue,setInputValue]=useState('')
  const [resultValue,setResultValue]=useState('')
  const [TargetCurrency,setTargetCurrency]=useState('')

  const BtnPressed=(targetValue:currency)=>
{
   if(!inputValue){
    return Snackbar.show({
      text:'Enter the value for conversion',
      backgroundColor:'#EA7773',
      textColor:'#000000'
    })
  }

  const inputAmount=parseFloat(inputValue)

  if(!isNaN(inputAmount)){
    const convertedValue=inputAmount*targetValue.value
    const finalResult=`${targetValue.symbol}${convertedValue.toFixed(2)}🤑`
    setResultValue(finalResult)
    setTargetCurrency(targetValue.name)
  }
  else{
    return Snackbar.show({
      text:'Only Numeric Value is Acceptable',
      backgroundColor:'#EA7773',
      textColor:'#000000'
    })
  }
}
  return (
    <>
      <StatusBar />
      <View style={styles.mainContainer}>
        <View style={styles.TopContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.inputTxt}>
                Rs
              </Text>
              <TextInput 
              style={styles.inputFeild}
                placeholder='Enter amount in PKR'
                maxLength={10}
                value={inputValue}
                keyboardType='number-pad'
                clearButtonMode='always'
                onChangeText={setInputValue}
               />
            </View>
            {
              resultValue &&
              (
                <Text style={styles.result}>{resultValue}</Text>
              )
            }
        </View>
        <View style={styles.bottomContainer}>
            <FlatList 
            data={currencyByRupee}
            key={3}//Without key, React tries to reuse the existing FlatList with a different column count, which causes a layout crash.
            numColumns={4}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
              <Pressable style={[styles.button, TargetCurrency===item.name && styles.selected]} onPress={()=>BtnPressed(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
  )} />
        </View>
      </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#cce4ff',
  },
  TopContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputFeild:{
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  result:{
    fontSize: 32,
    color: '#207de9',
    fontWeight: '800'
  },
  bottomContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  textContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  button:{
    margin:12,
    width:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected:{
    backgroundColor: '#ffeaa7',
  },
  inputTxt:{
     marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },

})