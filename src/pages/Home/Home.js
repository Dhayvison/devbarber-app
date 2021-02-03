import * as React from 'react';
import {ActivityIndicator, Alert, Platform, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import GeoLocation from '@react-native-community/geolocation';

import {
  Wrapper,
  Scroll,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './Home.style';
import SearchSVG from '../../assets/search.svg';
import LocationSVG from '../../assets/my_location.svg';

import {Palette} from '../../utils';
import Api from '../../api';
import BarberListItem from '../../components/BarberListItem';

export default () => {
  const {navigate} = useNavigation();
  const [locationText, setLocationText] = React.useState('');
  const [coords, setCoords] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [barbers, setBarbers] = React.useState([]);

  async function handleLocationFinder() {
    setIsLoading(true);
    const permite = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (permite === 'granted') {
      GeoLocation.getCurrentPosition((data) => {
        setCoords(data.coords);
        getBarbers();
      });
    }
    setIsLoading(false);
  }

  async function handleLocationSearch() {
    console.info('Acabou');
    setIsLoading(true);
    setCoords(null);
    getBarbers();
    setIsLoading(false);
  }

  async function getBarbers() {
    let lat = null;
    let lng = null;

    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    const json = await Api.getBarbers(lat, lng, locationText);

    if (json.error === '') {
      setBarbers(json.data);
      setLocationText(json.loc);
    } else {
      Alert.alert(
        'Ocorreu um erro',
        'Não foi possível carregar a lista de barbeiros',
      );
    }
  }

  React.useEffect(() => {
    getBarbers();
  }, []);

  return (
    <Wrapper>
      <Scroll
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleLocationFinder}
          />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton
            onPress={() => {
              navigate('Search');
            }}
            underlayColor={Palette.light}>
            <SearchSVG width="26" height="26" fill="white" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            value={locationText}
            onChangeText={(text) => {
              setLocationText(text);
            }}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder
            disabled={isLoading}
            onPress={() => {
              handleLocationFinder();
            }}>
            {isLoading ? (
              <ActivityIndicator color={Palette.dark} />
            ) : (
              <LocationSVG width="24" height="24" fill={Palette.dark} />
            )}
          </LocationFinder>
        </LocationArea>

        {barbers.map((item) => {
          return <BarberListItem key={item.id} barberInfo={item} />;
        })}
      </Scroll>
    </Wrapper>
  );
};
