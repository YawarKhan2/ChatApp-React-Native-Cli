import React, { useState, useRef } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import OnBoardingItems from '../components/onboardingitems';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const OnBoardingScreen = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    // Precompute values
    const expandedWidth = responsiveWidth(40);
    const defaultWidth = responsiveHeight(8);

    const width = useSharedValue(defaultWidth);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(currentIndex === 2 ? expandedWidth : defaultWidth),
        };
    });

    const render = ({ item }) => {
        return <OnBoardingItems item={item} />;
    };

    const onViewChanged = (e) => {
        const index = Math.floor(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
        setCurrentIndex(index);
    };

    const handleButtonPress = () => {
        if (currentIndex === 2) {
            navigation.navigate("SignUp")
        } else {
            // Scroll to the next page
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#9b5ed8' }}>
            <View style={{ height: responsiveHeight(80), width: '100%' }}>
                <FlatList
                    ref={flatListRef}
                    data={[1, 2, 3]}
                    renderItem={render}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) =>  item.toString()}
                    onScroll={(e) => onViewChanged(e)}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingVertical: responsiveHeight(1),
                    }}
                >
                    {[1, 2, 3].map((item, index) => (
                        <View
                            key={item}
                            style={[
                                {
                                    width: responsiveWidth(2.5),
                                    height: responsiveWidth(1.5),
                                    borderRadius: responsiveWidth(1),
                                    backgroundColor: 'white',
                                    marginHorizontal: responsiveWidth(0.8),
                                },
                                currentIndex === index ? { width: responsiveWidth(5) } : { backgroundColor: '#CDAEEB' },
                            ]}
                        />
                    ))}
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={handleButtonPress}
                        style={{
                            height: responsiveHeight(8),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Animated.View
                            style={[
                                {
                                    height: responsiveHeight(8),
                                    backgroundColor: 'white',
                                    borderRadius: responsiveHeight(4),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                },
                                animatedStyle, // Apply animated style
                            ]}
                        >
                            {currentIndex === 2 ? (
                                <Text style={{ color: '#9b5ed8', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Start Chat</Text>
                            ) : (
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#9b5ed8', fontSize: responsiveFontSize(2) }} />
                            )}
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OnBoardingScreen;
