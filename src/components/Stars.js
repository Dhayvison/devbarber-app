import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styled from 'styled-components';
import StarSVG from '../assets/star.svg';
import {Palette} from '../utils';

const StarsArea = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StarsContainer = styled(ImageBackground)`
  width: 100px;
`;

const Stars = styled(View)`
  flex-direction: row;
  overflow: hidden;
  width: ${(props) => props.width};
`;

const TextStars = styled(Text)`
  margin-right: 5px;
  color: ${Palette.dark};
  font-size: 10px;
  font-weight: bold;
`;

export default ({stars, showText}) => {
  const PROPS = {
    width: '20',
    height: '20',
    fill: Palette.yellow,
  };

  return (
    <StarsArea>
      {showText && <TextStars>{stars}</TextStars>}

      <StarsContainer
        source={require('../assets/star_empty.png')}
        imageStyle={{resizeMode: 'repeat'}}>
        <Stars width={stars * 20 + 'px'}>
          <StarSVG {...PROPS} />
          <StarSVG {...PROPS} />
          <StarSVG {...PROPS} />
          <StarSVG {...PROPS} />
          <StarSVG {...PROPS} />
        </Stars>
      </StarsContainer>
    </StarsArea>
  );
};
