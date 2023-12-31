import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function designSystem() {
    ////////////////////////////////////////////////////////////////////////
    // Munch colour palette
    const COLOR = StyleSheet.create({
        MUNCH_RED: '#fe390f',
        MUNCH_BLACK: '#000000',
        MUNCH_PINK: '#eba398',
        MUNCH_GREEN: '#194641',
        MUNCH_NAVY: '#0f2335',
        MUNCH_GOLD: '#9b8250',
        MUNCH_WHITE: '#fff',
        MUNCH_DARK_GRAY: '#5A5A5A',
    });

    ////////////////////////////////////////////////////////////////////////
    // Colour palette combinations
    const PRIMARY = StyleSheet.create({
        CORE_BLACK_RED: {
            color: COLOR.MUNCH_BLACK,
            backgroundColor: COLOR.MUNCH_RED,
        },
        COLOUR_ON_COLOUR: {
            PINK_GREEN: {
                color: COLOR.MUNCH_PINK,
                backgroundColor: COLOR.MUNCH_GREEN,
            },
            RED_BLACK: {
                color: COLOR.MUNCH_RED,
                backgroundColor: COLOR.MUNCH_BLACK,
            },
            RED_NAVY: {
                color: COLOR.MUNCH_RED,
                backgroundColor: COLOR.MUNCH_NAVY,
            },
            BLACK_RED: {
                color: COLOR.MUNCH_BLACK,
                backgroundColor: COLOR.MUNCH_RED,
            },
            BLACK_PINK: {
                color: COLOR.MUNCH_BLACK,
                backgroundColor: COLOR.MUNCH_PINK,
            },
        },
    });

    ////////////////////////////////////////////////////////////////////////
    // Top navigation bar for all screens
    const STACK_NAV_HEADER = {
        headerStyle: {
            ...PRIMARY.COLOUR_ON_COLOUR.RED_BLACK,
        },

        headerTitle: () => (
            <View style={STYLING.appHeaderContainer}>
                <TouchableOpacity style={STYLING.logoContainer}>
                    <Text style={STYLING.appHeaderTitleFont}> MUNCH</Text>
                </TouchableOpacity>
                <Text style={STYLING.appHeaderSubtitle}>ARtQuest</Text>
            </View>
        ),
        headerTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff', // set the back button arrow color to white
    };

    const INPUT_FORM = StyleSheet.create({
        input: {
            width: '100%',
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 0,
            marginBottom: 10,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },
    });

    const CONTAINERS = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR.MUNCH_WHITE,
            alignItems: 'center',
            justifyContent: 'center',
        },
        modal: {
            height: '60%',
            width: '70%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 5,
        },
        modalPressed: {
            backgroundColor: '#ccc',
        },
        image: {
            borderColor: '#cce',
            borderRadius: 5,
            resizeMode: 'contain',
            aspectRatio: 0.75,
            height: '40%',
        },
    });

    const TEXT_STYLES = StyleSheet.create({
        title: {
            fontFamily: 'Munch-Backslant',
            fontSize: 48,
            textAlign: 'center'
        },
        headline: {
            fontFamily: 'Munch-Bold',
            fontSize: 36,
        },
        text: {
            fontFamily: 'HelveticaNeue',
            fontSize: 22,
        },
    });

    const STYLING = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR.MUNCH_WHITE,
            alignItems: 'center',
            justifyContent: 'center',
        },

        text: {
            fontFamily: 'HelveticaNeue',
            fontWeight: 'bold',
            fontSize: 22,
        },

        /***** Input Section ******/

        /*******************
         *  Button Section
         *  ***************/

        primaryButton: {

            backgroundColor: COLOR.MUNCH_RED,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginBottom: 10,

            color: COLOR.MUNCH_WHITE,
            fontFamily: 'Helvetica',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },

        /***********************
         *  Homepage Section
         *  ******************/

        homePageText: {
            fontFamily: 'Montserrat',
            fontSize: 28,
            margin: 5,
        },

        /***********************
         *  AppHeader Section
         *  ******************/

        appHeaderContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR.MUNCH_BLACK,
            paddingBottom: 30,
        },
        logoContainer: {
            flexDirection: 'row',
        },

        appHeaderTitleFont: {
            flex: 1,
            color: COLOR.MUNCH_RED,
            fontSize: 28,
            fontFamily: 'Munch-Backslant',
            paddingTop: 5,
            paddingLeft: 15,
        },
        appHeaderSubtitleContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 20,
        },
        appHeaderSubtitle: {
            flex: 1,
            fontFamily: 'Munch-Bold',
            fontSize: 36,
            width: '100%',
            color: COLOR.MUNCH_WHITE,
            paddingStart: 15,
        },
        appHeaderBackBtn: {
            marginRight: 20,
            color: COLOR.MUNCH_RED,
            alignItems: 'flex-end',
        },
        appHeaderBackButtonText: {
            fontSize: 32,
            color: COLOR.WHITE,
        },

        /***********************
         *  Login Page Section
         *  *******************/

        safeAreaViewContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            top: 25,
        },
        loginPageInput: {
            display: 'flex',
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: COLOR.DARK_GRAY,
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },

        loginPageTextInputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            marginTop: 50,
        },
        loginPagePasswordInput: {
            width: '100%',
            height: 30,
            borderWidth: 0,
            borderColor: 'rgba(50, 50, 50, 1)',
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },

        icon: {
            width: 32,
            height: 32,
        },

        dashedContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 140,
        },
        dashed: {
            borderBottomWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            width: '80%',
        },

        passwordInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'rgba(50,50,50,1)',
            borderWidth: 1.4,
            paddingHorizontal: 10,
            marginBottom: 10,
        },

        passwordIconContainer: {
            marginLeft: 'auto',
        },

        /**************************
         *  Signup Page Section
         *  *********************/

        signupPageTextInputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
        },

        signupPageEmailInput: {
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderColor: COLOR.WHITE,
            marginBottom: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            paddingLeft: 15,
        },

        passwordInput: {
            width: '80%',
            height: 30,
            borderWidth: 0,
            borderColor: COLOR.WHITE,
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },
    });

    return {
        COLOR,
        PRIMARY,
        STACK_NAV_HEADER,
        INPUT_FORM,
        STYLING,
        CONTAINERS,
        TEXT_STYLES,
    };
}
