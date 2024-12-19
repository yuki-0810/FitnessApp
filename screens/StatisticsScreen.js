import React from 'react';
import {
  Circle,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  ZStack,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const StatisticsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { height: 80, width: 80 },
              dimensions.width
            )}
          >
            <>
              {Constants['ProfilePicture'] ? null : (
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['UserImage'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 50, height: 80, width: 80 }
                    ),
                    dimensions.width
                  )}
                />
              )}
            </>
            {/* Profile Pic */}
            <>
              {!Constants['ProfilePicture'] ? null : (
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(`${Constants['ProfilePicture']}`)}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 50 }
                    ),
                    dimensions.width
                  )}
                />
              )}
            </>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.GetFit['App Green'],
                  borderRadius: 50,
                  borderWidth: 3,
                  height: 18,
                  position: 'absolute',
                  right: 3,
                  top: 3,
                  width: 18,
                },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Arvind Limba'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.GetFit['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginTop: 6,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {'A Sports Lover'}
          </Text>
        </View>
        {/* Stats */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.GetFit['Custom Color_9'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxVideoRecording1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
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
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Workout'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'153'}
              </Text>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.GetFit['GetFit Orange'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxsHot1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
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
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Calories'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'320'}
              </Text>
            </View>
          </View>
        </View>
        {/* Report */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              marginLeft: 20,
              marginRight: 20,
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
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {"Today's Report"}
          </Text>
          {/* Cards Container */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Left side */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.GetFit['Custom Color_10'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.GetFit['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxsHot1'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Calories Burned'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'245'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Kcal'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.GetFit['Custom Color_12'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.GetFit['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxsBowlRice1'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Carbohydrate'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'123'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Gram'}
                  </Text>
                </Text>
              </View>
            </View>
            {/* Right side */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 20 },
                dimensions.width
              )}
            >
              {/* view */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.GetFit['Custom Color_11'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.GetFit['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Icon
                    color={palettes.GetFit['Custom Color_2']}
                    name={'AntDesign/heart'}
                    size={15}
                    style={StyleSheet.applyWidth(
                      { left: 8, top: 8 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Heart Rate'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'78'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Bpm'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.GetFit['Custom Color_13'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.GetFit['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxDumbbell'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Workout'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.GetFit['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'53'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Video'}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StatisticsScreen);
