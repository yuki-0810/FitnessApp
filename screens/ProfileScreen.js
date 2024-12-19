import React from 'react';
import {
  Button,
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [LogoutModal, setLogoutModal] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.GetFit['Custom Color'] },
        dimensions.width
      )}
    >
      {/* User Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 10,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Default User Image */}
          <>
            {Constants['ProfilePicture'] ? null : (
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['UserImage'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 50, height: 56, width: 56 }
                  ),
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Profile Picture */}
          <>
            {!Constants['ProfilePicture'] ? null : (
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(`${Constants['ProfilePicture']}`)}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 50, height: 56, width: 56 }
                  ),
                  dimensions.width
                )}
              />
            )}
          </>
          {/* User Name  */}
          <View
            style={StyleSheet.applyWidth(
              { justifyContent: 'space-evenly', marginLeft: 12 },
              dimensions.width
            )}
          >
            {/* Full Name */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Arvind Limba'}
            </Text>
            {/* username */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: palettes.GetFit['Custom Color_2'], opacity: 0.5 },
                dimensions.width
              )}
            >
              {'@awi21589'}
            </Text>
          </View>
        </View>
        {/* Edit Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('UserInfoScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['EditSquare'])}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </View>
        </Pressable>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Stats View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.GetFit['Custom Color_5'],
              borderRadius: 21,
              flexDirection: 'row',
              height: 109,
              justifyContent: 'space-evenly',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
              opacity: 1,
            },
            dimensions.width
          )}
        >
          {/* Height */}
          <View>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: palettes.GetFit['Custom Color_2'], fontSize: 10 },
                dimensions.width
              )}
            >
              {'Height'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 24,
                  },
                  dimensions.width
                )}
              >
                {'169'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: palettes.GetFit['Custom Color_2'], marginLeft: 5 },
                  dimensions.width
                )}
              >
                {'Cm'}
              </Text>
            </View>
          </View>
          <Divider
            color={palettes.GetFit['Custom Color_2']}
            style={StyleSheet.applyWidth(
              { height: 40, opacity: 0.5, width: 1 },
              dimensions.width
            )}
          />
          {/* Weight */}
          <View>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: palettes.GetFit['Custom Color_2'], fontSize: 10 },
                dimensions.width
              )}
            >
              {'Weight'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 24,
                  },
                  dimensions.width
                )}
              >
                {'89'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: palettes.GetFit['Custom Color_2'], paddingLeft: 5 },
                  dimensions.width
                )}
              >
                {'Kg'}
              </Text>
            </View>
          </View>
          <Divider
            color={palettes.GetFit['Custom Color_2']}
            style={StyleSheet.applyWidth(
              { height: 40, opacity: 0.5, width: 1 },
              dimensions.width
            )}
          />
          {/* Todo Today */}
          <View>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: palettes.GetFit['Custom Color_2'], fontSize: 10 },
                dimensions.width
              )}
            >
              {'Todo Today'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 24,
                  },
                  dimensions.width
                )}
              >
                {'45'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: palettes.GetFit['Custom Color_2'], marginLeft: 5 },
                  dimensions.width
                )}
              >
                {'%'}
              </Text>
            </View>
          </View>
          <Divider
            color={palettes.GetFit['Custom Color_2']}
            style={StyleSheet.applyWidth(
              { height: 40, opacity: 0.5, width: 1 },
              dimensions.width
            )}
          />
        </View>
        {/* Security */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 30, paddingBottom: 20 },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'security'}
          </Text>
          {/* Change Password */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('ChangePasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['IconLock'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Change password'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Feather/chevron-right'}
              />
            </View>
          </Pressable>
          {/* Forgot Password */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('ForgotPasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Unlock'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Forgot password'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Feather/chevron-right'}
              />
            </View>
          </Pressable>
          {/* Security */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('SecurityScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['ShieldDone'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Security'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Feather/chevron-right'}
              />
            </View>
          </Pressable>
        </View>
        {/* General */}
        <View
          style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
        >
          {/* Section Heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'general'}
          </Text>
          {/* Language */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('LanguageSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Globe'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'language'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Feather/chevron-right'}
              />
            </View>
          </Pressable>
          {/* Clear Cache */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Layer2'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'clear cache'}
                </Text>
              </View>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    opacity: 0.5,
                    paddingLeft: 12,
                    textTransform: 'none',
                  },
                  dimensions.width
                )}
              >
                {'88 MB'}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* About */}
        <View
          style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
        >
          {/* Section Heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'about'}
          </Text>
          {/* Legal And Policies */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('LegalPoliciesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Shield'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'legal and policies'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Feather/chevron-right'}
              />
            </View>
          </Pressable>
          {/* Help & Support */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('HelpandSupportScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Question'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'help & support'}
                </Text>
              </View>
              <Icon
                size={24}
                color={palettes.GetFit['Custom Color_2']}
                name={'Entypo/chevron-right'}
              />
            </View>
          </Pressable>
          {/* Dark Mode */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={imageSource(Images['Activity'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'dark mode'}
                </Text>
              </View>
              <Switch
                onValueChange={newSwitchValue => {
                  try {
                    setSwitchValue(newSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeTrackColor={palettes.GetFit['Custom Color_5']}
                inactiveTrackColor={palettes.GetFit['Custom Color_7']}
                value={switchValue}
              />
            </View>
          </Pressable>
        </View>
        {/* Log Out */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setLogoutModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.GetFit['Custom Color'],
              borderBottomWidth: 1,
              borderColor: palettes.GetFit['GetFit Orange'],
              borderLeftWidth: 1,
              borderRadius: 32,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: palettes.GetFit['GetFit Orange'],
              fontFamily: 'System',
              fontSize: 15,
              fontWeight: '700',
              height: 50,
              marginBottom: 25,
              marginLeft: 20,
              marginRight: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Log Out'}
        />
      </SimpleStyleScrollView>

      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={true}
        visible={LogoutModal}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
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
                paddingLeft: 10,
                paddingRight: 10,
              },
              dimensions.width
            )}
          >
            <Icon
              color={palettes.GetFit['Custom Color_8']}
              name={'AntDesign/questioncircleo'}
              size={101}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                  marginTop: 25,
                },
                dimensions.width
              )}
            >
              {'Are You Sure?'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  marginTop: 4,
                  opacity: 0.5,
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
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Logout */}
              <Pressable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                    navigation.navigate('LoginEmailScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '40%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: palettes.GetFit['Custom Color_8'],
                      borderLeftWidth: 1,
                      borderRadius: 20,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
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
                        color: palettes.GetFit['Custom Color_8'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {'Log Out'}
                  </Text>
                </View>
              </Pressable>
              {/* Cancel */}
              <Pressable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '40%' },
                  dimensions.width
                )}
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
                      },
                      dimensions.width
                    )}
                  >
                    {'Cancel'}
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

export default withTheme(ProfileScreen);
