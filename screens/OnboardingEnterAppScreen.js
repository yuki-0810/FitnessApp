import React from 'react';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const OnboardingEnterAppScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['PexelsAndreaPiacquadio37560421'])}
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-end' },
          dimensions.width
        )}
      >
        <LinearGradient
          startX={0}
          color1={palettes.GetFit['Custom Color']}
          color2={'"rgba(0, 0, 0, 0)"'}
          endX={0}
          endY={0}
          startY={100}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 30,
                marginTop: 100,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {"Welcome, let's \nexercise together"}
          </Text>
          {/* description */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                fontSize: 15,
                lineHeight: 22,
                marginTop: 5,
                opacity: 0.65,
                paddingLeft: 40,
                paddingRight: 40,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy '
            }
          </Text>
          {/* Start Introduction */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('SelectLanguageScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.GetFit['GetFit Orange'],
                borderRadius: 24,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 54,
                marginBottom: 50,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 30,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Start Introduction'}
          />
        </LinearGradient>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingEnterAppScreen);
