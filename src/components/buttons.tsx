import { StyleSheet, Text, View } from 'react-native'
import React, { JSX } from 'react'
import { PropsWithChildren } from 'react'


type currencyProps=PropsWithChildren<{
    name:string,
    flag:string,
    symbol:string
}>


const CurrencyBtn=(props:currencyProps):JSX.Element=> {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.country}>{props.name}</Text>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.symbol}>{props.symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        alignItems:'center',
        
    },
    flag:{
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4,
        alignItems:'center'
    },
    country:{
        fontSize: 14,
        color: "#2d3436",
        textAlign:'center'
    },
    symbol:{
        fontSize:12,
        color:'#e2d3436'
    }
})

export default CurrencyBtn