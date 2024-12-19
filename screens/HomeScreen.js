import React from 'react';
import {
  Circle,
  Divider,
  Icon,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['HomeBG'])}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.GetFit['Custom Color'],
            height: '100%',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Scroll View 2 */}
        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
        >
          {/* Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('UserInfoScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['UserImage'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 50, height: 40, width: 40 }
                  ),
                  dimensions.width
                )}
              />
            </Pressable>

            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              {/* Message */}
              <Pressable
                onPress={() => {
                  try {
                    navigation.navigate('MessageScreen');
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
                      height: 48,
                      justifyContent: 'center',
                      width: 48,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={palettes.GetFit['Custom Color_2']}
                    name={'Ionicons/chatbox-ellipses-outline'}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: palettes.GetFit['GetFit Orange'],
                        borderRadius: 5.5,
                        height: 11,
                        position: 'absolute',
                        right: 9,
                        top: 9,
                        width: 11,
                      },
                      dimensions.width
                    )}
                  />
                </View>
              </Pressable>
              {/* Notification */}
              <Pressable
                onPress={() => {
                  try {
                    navigation.navigate('NotificationsScreen');
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
                      height: 48,
                      justifyContent: 'center',
                      width: 48,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={palettes.GetFit['Custom Color_2']}
                    name={'Ionicons/notifications-outline'}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: palettes.GetFit['GetFit Orange'],
                        borderRadius: 5.5,
                        height: 11,
                        position: 'absolute',
                        right: 11,
                        top: 10,
                        width: 11,
                      },
                      dimensions.width
                    )}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          {/* Greeting */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 30, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Hi, Arvind!'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.GetFit['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 30,
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              {'Have you \nexercised today?'}
            </Text>
          </View>
          {/* Stats View */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 24, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            {/* Card */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.GetFit.Darken,
                  borderRadius: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  padding: 16,
                },
                dimensions.width
              )}
            >
              {/* Weight */}
              <View>
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: palettes.GetFit['Custom Color_2'] },
                    dimensions.width
                  )}
                >
                  {'Weight'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 8,
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
                        fontFamily: 'Inter_700Bold',
                        fontSize: 30,
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
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        paddingLeft: 5,
                      },
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
                  { height: 40, width: 1 },
                  dimensions.width
                )}
              />
              {/* Height */}
              <View>
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: palettes.GetFit['Custom Color_2'] },
                    dimensions.width
                  )}
                >
                  {'Height'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 8,
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
                        fontFamily: 'Inter_700Bold',
                        fontSize: 30,
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
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        marginLeft: 5,
                      },
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
                  { height: 40, width: 1 },
                  dimensions.width
                )}
              />
              {/* Todo */}
              <View>
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: palettes.GetFit['Custom Color_2'] },
                    dimensions.width
                  )}
                >
                  {'Todo Today'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 8,
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
                        fontFamily: 'Inter_700Bold',
                        fontSize: 30,
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
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        marginLeft: 5,
                      },
                      dimensions.width
                    )}
                  >
                    {'%'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Gray[900],
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                flex: 1,
                gap: 20,
                marginTop: 20,
                paddingBottom: 80,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* CTA */}
            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* Banner */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.GetFit['Custom Color_4'],
                    borderRadius: 20,
                    flexDirection: 'row',
                    gap: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Left */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-start',
                      borderRadius: 15,
                      flex: 1,
                      gap: 20,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingTop: 20,
                    },
                    dimensions.width
                  )}
                >
                  {/* Title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.GetFit['Custom Color_2'],
                        flex: 1,
                        fontFamily: 'Inter_500Medium',
                        fontSize: 18,
                      },
                      dimensions.width
                    )}
                  >
                    {'Healthy life belongs \nto everyone'}
                  </Text>

                  <Pressable>
                    {/* Start Exercising */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: palettes.GetFit['Custom Color_5'],
                          borderRadius: 20,
                          height: 32,
                          justifyContent: 'center',
                          width: 124,
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
                            fontSize: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {'Start Exercising'}
                      </Text>
                    </View>
                  </Pressable>
                </View>
                {/* Right */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-end',
                      alignSelf: 'flex-end',
                      justifyContent: 'flex-end',
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(
                      Images[
                        'PortraitSmilingAfroAmericanSportsManStretchingHisMuscularArmsBeforeWorkoutBySeaUsingMusicAppHisSmartphone1'
                      ]
                    )}
                    style={StyleSheet.applyWidth(
                      { height: 100, width: 100 },
                      dimensions.width
                    )}
                  />
                </View>
              </View>
            </View>
            {/* Category */}
            <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
              {/* Heading */}
              <View
                style={StyleSheet.applyWidth(
                  { paddingLeft: 16, paddingRight: 16 },
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
                    },
                    dimensions.width
                  )}
                >
                  {'Category'}
                </Text>
              </View>
              {/* Cards */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    gap: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Hand */}
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 12, height: 100, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <ImageBackground
                        {...GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].props}
                        resizeMode={'cover'}
                        source={imageSource(Images['CategoryHand'])}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageBackgroundStyles(theme)[
                              'Image Background'
                            ].style,
                            {
                              alignItems: 'center',
                              borderRadius: 15,
                              height: 100,
                              justifyContent: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: palettes.GetFit['Custom Color_2'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 15,
                                textTransform: 'capitalize',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Arms'}
                        </Text>
                      </ImageBackground>
                    </View>
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Legs */}
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 15, height: 100, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <ImageBackground
                        {...GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].props}
                        resizeMode={'cover'}
                        source={imageSource(Images['PexelsNappy93607512'])}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageBackgroundStyles(theme)[
                              'Image Background'
                            ].style,
                            {
                              alignItems: 'center',
                              borderRadius: 15,
                              height: 100,
                              justifyContent: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: palettes.GetFit['Custom Color_2'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 15,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Legs'}
                        </Text>
                      </ImageBackground>
                    </View>
                  </Pressable>
                </View>
                {/* View 3 */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Jump */}
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 15, height: 100, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <ImageBackground
                        {...GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].props}
                        resizeMode={'cover'}
                        source={imageSource(Images['Rectangle224291'])}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageBackgroundStyles(theme)[
                              'Image Background'
                            ].style,
                            {
                              alignItems: 'center',
                              borderRadius: 15,
                              height: 100,
                              justifyContent: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: palettes.GetFit['Custom Color_2'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 15,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Cardio'}
                        </Text>
                      </ImageBackground>
                    </View>
                  </Pressable>
                </View>
                {/* View 4 */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Yoga */}
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 15, height: 100, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <ImageBackground
                        {...GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].props}
                        resizeMode={'cover'}
                        source={imageSource(Images['Rectangle224293'])}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageBackgroundStyles(theme)[
                              'Image Background'
                            ].style,
                            {
                              alignItems: 'center',
                              borderRadius: 15,
                              height: 100,
                              justifyContent: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: palettes.GetFit['Custom Color_2'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 15,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Yoga'}
                        </Text>
                      </ImageBackground>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
            {/* Popular Workout */}
            <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
              {/* Heading */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 16,
                  },
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
                      fontFamily: 'Inter_500Medium',
                      fontSize: 18,
                    },
                    dimensions.width
                  )}
                >
                  {'Popular Workout'}
                </Text>
                {/* See all */}
                <Link
                  accessible={true}
                  onPress={() => {
                    try {
                      navigation.navigate('WorkoutListAllScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: palettes.GetFit['Custom Color_2'] },
                    dimensions.width
                  )}
                  title={'See all'}
                />
              </View>
              {/* List */}
              <View>
                <DraftbitExampleDataApi.FetchUsersGET limit={4}>
                  {({ loading, error, data, refetchUsers }) => {
                    const fetchData = data?.json;
                    if (loading) {
                      return <ActivityIndicator />;
                    }

                    if (error || data?.status < 200 || data?.status >= 300) {
                      return <ActivityIndicator />;
                    }

                    return (
                      <SimpleStyleFlatList
                        data={fetchData}
                        inverted={false}
                        keyExtractor={(listData, index) =>
                          listData?.id ??
                          listData?.uuid ??
                          index?.toString() ??
                          JSON.stringify(listData)
                        }
                        keyboardShouldPersistTaps={'never'}
                        listKey={'2sCkpdjV'}
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <Pressable
                              onPress={() => {
                                try {
                                  navigation.navigate('WorkoutDetailsScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { borderRadius: 8, height: 190, width: 180 },
                                  dimensions.width
                                )}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    { borderRadius: 8, overflow: 'hidden' },
                                    dimensions.width
                                  )}
                                >
                                  <ImageBackground
                                    resizeMode={'cover'}
                                    source={imageSource(Images['CategoryHand'])}
                                    style={StyleSheet.applyWidth(
                                      { height: 128 },
                                      dimensions.width
                                    )}
                                  ></ImageBackground>
                                </View>

                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.GetFit['Custom Color_2'],
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 15,
                                      marginTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Up and Down Stairs'}
                                </Text>

                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.GetFit['Custom Color_2'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      marginTop: 8,
                                      opacity: 0.5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Train your thighs and legs'}
                                </Text>
                              </View>
                            </Pressable>
                          );
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'row',
                            gap: 30,
                            paddingLeft: 16,
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      />
                    );
                  }}
                </DraftbitExampleDataApi.FetchUsersGET>
              </View>
            </View>
          </View>
        </SimpleStyleScrollView>
      </ImageBackground>
      {/* FAB */}
      <View
        style={StyleSheet.applyWidth(
          { bottom: 20, position: 'absolute', right: 20, zIndex: 10 },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('MakeTodaysPlaneScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle
            bgColor={palettes.GetFit['Custom Color_5']}
            size={50}
            style={StyleSheet.applyWidth({ padding: 30 }, dimensions.width)}
          >
            <Icon
              color={palettes.GetFit['Custom Color_2']}
              name={'Feather/plus'}
              size={30}
            />
          </Circle>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
