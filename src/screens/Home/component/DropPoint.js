import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from '../styles';
import {ms} from 'react-native-size-matters';
import {COLORS} from '@/theme/Colors';
import {goBack} from '@/navigation/NavigationRef';
import {CrossBlack, GPS, GpsIcon, Location, Search, Seprator} from '@/assets';
import {Spacer} from '@/theme/Spacer';

const DropPoint = ({setAddressDropPoint, onPress, setIsvisibleDropPoint}) => {
  return (
    <View style={{flex: 1}}>
      <Spacer space={ms(10)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: ms(30),
            color: COLORS.black,
            fontWeight: '600',
            flex: 1,
          }}>
          {'Drop Point'}
        </Text>
        <TouchableOpacity
          style={styles.arrowIconViewStyle}
          onPress={() => setIsvisibleDropPoint(false)}>
          <Image source={CrossBlack} style={styles.arrowIconStyle} />
        </TouchableOpacity>
      </View>

      <Spacer space={ms(20)} />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderWidth: ms(1),
          borderRadius: ms(20),
          paddingVertical: ms(5),
          borderColor: '#E8E8E8',
          paddingHorizontal: ms(10),
        }}>
        <Image
          source={Search}
          style={{width: ms(20), height: ms(20), marginTop: ms(12)}}
        />

        <View
          style={{
            width: ms(2),
            backgroundColor: '#E6E6E6',
            height: ms(25),
            marginLeft: ms(15),
            marginTop: ms(10),
          }}
        />

        <GooglePlacesAutocomplete
          fetchDetails
          autoFocus={true}
          listViewDisplayed={true}
          returnKeyType={'search'}
          placeholder={'Street Address'}
          enablePoweredByContainer={false}
          query={{
            language: 'en',
            type: 'address',
            key: 'AIzaSyBbytCk92gm3MK3Mrs_374RDKf4bz0X1ck',
          }}
          onPress={data => {
            setAddressDropPoint(data?.description);
            setIsvisibleDropPoint(false);
          }}
          styles={{
            textInput: {marginLeft: ms(5)},
          }}
        />
      </View>

      <Spacer space={ms(25)} />

      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', marginHorizontal: ms(10), width: '50%'}}>
        <Image
          source={GpsIcon}
          resizeMode="contain"
          style={{height: ms(24), width: ms(24)}}
        />
        <Text style={{marginHorizontal: ms(10)}}>{'Use Current Location'}</Text>
      </TouchableOpacity>

      <Spacer space={ms(10)} />
      <View style={{alignItems: 'center'}}>
        <Image style={{width: '95%'}} source={Seprator} resizeMode="stretch" />
      </View>
      <Spacer space={ms(10)} />

      <TouchableOpacity
        style={{flexDirection: 'row', marginHorizontal: ms(10), width: '50%'}}>
        <Image
          source={Location}
          style={{height: ms(24), width: ms(24)}}
          resizeMode="contain"
        />
        <Text style={{marginHorizontal: ms(10)}}>{'Choose from Map'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropPoint;