import React from 'react';
import {
  Button,
  Circle,
  Icon,
  PinInput,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const EnterOTPScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [SuccesModal, setSuccesModal] = React.useState(false);
  const [pinInputValue, setPinInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [codeInputValue, setCodeInputValue] = React.useState(undefined);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.GetFit['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            justifyContent: 'center',
            marginTop: 60,
            paddingBottom: 10,
            paddingTop: 30,
          },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.GetFit['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 21,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Enter OTP'}
        </Text>
        {/* sub title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.GetFit['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'We have just sent you 4 digit code via your email '}
        </Text>
        {/* Email */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.GetFit['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              marginTop: 8,
              opacity: 1,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'example@gmail.com'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 35, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* OTP */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20, paddingTop: 12 },
            dimensions.width
          )}
        >
          <PinInput
            autoComplete={'one-time-code'}
            blurOnFull={true}
            cellCount={4}
            changeTextDelay={500}
            clearOnCellFocus={true}
            keyboardType={'number-pad'}
            onChangeText={newPinInputValue => {
              const codeInputValue = newPinInputValue;
              try {
                setPinInputValue(newPinInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            onInputFull={finalValue => {
              const codeInputValue = finalValue;
              try {
              } catch (err) {
                console.error(err);
              }
            }}
            renderItem={({ cellValue, isFocused }) => {
              return null;
            }}
            secureTextEntry={false}
            {...GlobalStyles.PinInputStyles(theme)['Pin Input'].props}
            focusedBorderColor={palettes.GetFit['Custom Color_4']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.PinInputStyles(theme)['Pin Input'].style,
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginLeft: 10,
                  marginRight: 10,
                  padding: 8,
                  width: 52,
                }
              ),
              dimensions.width
            )}
            value={pinInputValue}
          />
        </View>
        {/* Continue */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setSuccesModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.GetFit['Custom Color_5'],
              borderRadius: 24,
              fontFamily: 'System',
              fontSize: 15,
              fontWeight: '700',
              height: 56,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Continue'}
        />
        {/* Login */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                opacity: 0.64,
              },
              dimensions.width
            )}
          >
            {'Didn’t receive code? '}
          </Text>

          <Pressable>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_5'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Resend Code'}
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={true}
        visible={SuccesModal}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.GetFit['Custom Color'],
                height: '100%',
                opacity: 0.7,
                position: 'absolute',
                top: 0,
                width: '100%',
              },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.GetFit['Custom Color_3'],
                borderRadius: 16,
                height: 353,
                justifyContent: 'center',
                marginLeft: 24,
                marginRight: 24,
              },
              dimensions.width
            )}
          >
            <Circle
              size={75}
              style={StyleSheet.applyWidth(
                { backgroundColor: palettes.GetFit['Custom Color_2'] },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.GetFit['App Green']}
                name={'Ionicons/checkmark-circle'}
                size={101}
                style={StyleSheet.applyWidth(
                  { marginLeft: 7, marginTop: 2 },
                  dimensions.width
                )}
              />
            </Circle>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                  lineHeight: 28,
                  marginTop: 25,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'You have logged in \nsuccessfully'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  lineHeight: 20,
                  marginTop: 10,
                  opacity: 0.5,
                  paddingLeft: 25,
                  paddingRight: 25,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel'
              }
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Continue */}
              <Pressable
                onPress={() => {
                  try {
                    setSuccesModal(false);
                    navigation.navigate('OnboardingEnterAppScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.GetFit['Custom Color_5'],
                      borderRadius: 20,
                      height: 46,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        paddingLeft: 25,
                        paddingRight: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {'Continue'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(EnterOTPScreen);
