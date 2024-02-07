import {
  StyleSheet,
  ImageBackground,
  Vibration,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalList from '../components/HorizontalList';
import Header from '../components/Header';
import MyData from '../components/CatagotyData';
import {useNavigation} from '@react-navigation/native';
var SQLite = require('react-native-sqlite-storage');
import {addSetting} from '../reduxToolkit/Slice2';
import {QuestionMode} from '../reduxToolkit/Slice3';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {Addsid} from './ads';
import AsyncStorage from '@react-native-async-storage/async-storage';
const db = SQLite.openDatabase({
  name: 'eFlashManderin.db',
  createFromLocation: 1,
});

const Home = () => {
  const muted = useSelector(state => state.sound);
  const Navigation = useNavigation();
  const [mute, setMute] = useState(muted);
  console.log('thjis sis adds id', Addsid);
  useEffect(() => {
    getSettings();
  }, []);
  const dispatch = useDispatch();
  const getSettings = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM  tbl_settings',
        [],
        async (tx, results) => {
          let row = results.rows.item(0);
          dispatch(addSetting(row));
          dispatch(QuestionMode(row.Question));
          console.log(row);
        },
        err => {
          console.log(err);
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#73cbea'}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../Assets4/bgnewcategory.png')}>
        <Header
          onPress2={() => setMute(!mute)}
          mute={mute}
          onPress={() => {
            Navigation.navigate('setting', {pr: 'home'});
          }}
          home
        />
        <HorizontalList items={MyData} />
        <View
          style={{
            position: 'relative',
            width: '100%',
            bottom: 0,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <BannerAd
            style={{width: '100%'}}
            unitId={Addsid.BANNER}
            sizes={[BannerAdSize.FULL_BANNER]}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});