import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import {Palette} from '../../utils';

export const Wrapper = styled(View)`
  flex: 1;
  background-color: ${Palette.cyan};
  padding-top: 40px;
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderArea = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderTitle = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  max-width: 75%;
`;
export const SearchButton = styled(TouchableHighlight)`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const LocationArea = styled(View)`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-radius: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${Palette.light};
  padding-left: 20px;
  padding-right: 20px;
`;
export const LocationInput = styled(TextInput)`
  flex: 1;
  font-weight: bold;
  color: ${Palette.dark};
`;
export const LocationFinder = styled(TouchableOpacity)``;
