/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{useState} from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import gaya from './src/component/gaya'

const App = () => {
  const [nama]=useState(['david','dzaky','hafiz','aya','tika'])
  const [namateman]=useState('bobi')
  console.log('david')

  const Rendertext=()=>{
    return nama.map((val,index)=>{
      return (
        <Text style={
         gaya.tulisana
        } key={index}>halo gais nama saya {val}</Text>
      )
    })
  }
  return (
    <>
      <View style={{
        flexDirection:'column',flex:1
      }}>
        <View style={gaya.kotak1}>
          
        </View>
        <View style={gaya.kotak2}>
          <ScrollView >
            <View style={{backgroundColor:'pink',height:200,borderStyle:'solid',borderColor:'yellow',borderWidth:2}}>

            </View>
            <View  style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>
              <View style={{height:100,width:"33.3%",backgroundColor:'black'}}></View>
              <View style={{height:100,width:"33.3%",backgroundColor:'gray'}}></View>
              <View style={{height:100,width:"33.3%",backgroundColor:'salmon'}}></View>
              <View style={{height:100,width:"33.3%",backgroundColor:'yellow'}}></View>
              <View style={{height:100,width:"33.3%",backgroundColor:'salmon'}}></View>
              <View style={{height:100,width:"33.3%",backgroundColor:'gray'}}></View>
            </View>
            <View style={{backgroundColor:'whitesmoke',height:200}}>

            </View>
          </ScrollView>
        </View>
        <View style={gaya.kotak3}>
          
        </View>

      </View>
    </>
  );
};


export default App;
