import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './MainScreenStyles';
import {Loader} from '../../components/loader/Loader'
import ApiHelper from '../../utils/ApiHelper'
import  {GET_DELHI_WEATHER}from '../../utils/AppUrls'
import ApiKey from '../../utils/ApiKey'

const MAIN_SCREEN_RESPONSE="MainScreenResponse=>>>"
const MAIN_SCREEN_ERROR="MainScreenError=>>>>"

const MainScreen = ({navigation}) => {

  const [isLoading, setLoading]=React.useState(false)

  useEffect(() => {
    getWeatherList()
  },[]);

  function getWeatherList(){
    const url =GET_DELHI_WEATHER+ApiKey.WEATHER_KEY
    setLoading(true)
    ApiHelper.get(url).then(response=>{
      setLoading(false)
        console.log(MAIN_SCREEN_RESPONSE,'weatherResponse=>>>',response)
        if(response!=undefined){
            
        }
    }).catch(error=>{
      console.log(MAIN_SCREEN_ERROR,error)
    })
  }
  
  return (
    <View style={styles.parentView}>
        <Loader isLoading={isLoading}/>
    </View>
  );
};
export {MainScreen};
