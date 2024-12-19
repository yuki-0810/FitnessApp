import React from 'react';
import {
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [title, setTitle] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.GetFit['Custom Color'],
          height: dimensions.height,
        },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle bgColor={palettes.GetFit['Custom Color_2']} size={50}>
            <Icon
              size={24}
              color={palettes.GetFit['Custom Color']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Circle>
        </Pressable>
        {/* Screen Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.GetFit['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginLeft: -48,
            },
            dimensions.width
          )}
        >
          {'Notifications'}
        </Text>
        {/* View  */}
        <View />
      </View>

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
            <>
              {/* Section header */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.GetFit['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                  },
                  dimensions.width
                )}
              >
                {'Today'}
              </Text>
              <SimpleStyleFlatList
                data={fetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'1LCNEZCv'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row', marginTop: 20 },
                        dimensions.width
                      )}
                    >
                      <Circle
                        bgColor={palettes.GetFit['Custom Color_2']}
                        size={50}
                      >
                        {/* Notif Icon */}
                        <Image
                          resizeMode={'center'}
                          source={imageSource(Images['Calendar'])}
                          style={StyleSheet.applyWidth(
                            { height: 24, width: 24 },
                            dimensions.width
                          )}
                        />
                      </Circle>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, paddingTop: 4 },
                          dimensions.width
                        )}
                      >
                        {/* Title ~ */}
                        <Text
                          accessible={true}
                          selectable={false}
                          ellipsizeMode={'tail'}
                          numberOfLines={2}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.GetFit['Custom Color_2'],
                              fontFamily: 'Inter_400Regular',
                              fontSize: 16,
                              lineHeight: 20,
                              marginBottom: 8,
                              marginLeft: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {'Edward lecky successfully completed leg training'}
                        </Text>
                        {/* Time Elapase ~ */}
                        <Text
                          accessible={true}
                          selectable={false}
                          numberOfLines={2}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.GetFit['Custom Color_2'],
                              fontFamily: 'Inter_400Regular',
                              fontSize: 13,
                              marginLeft: 12,
                              opacity: 0.5,
                            },
                            dimensions.width
                          )}
                        >
                          {'2 hours Ago'}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  { marginBottom: 25, paddingLeft: 20, paddingRight: 20 },
                  dimensions.width
                )}
              />
            </>
          );
        }}
      </DraftbitExampleDataApi.FetchUsersGET>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
