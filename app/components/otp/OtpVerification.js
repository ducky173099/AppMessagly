
import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, 
    View, 
    Text,
    Image,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import RNOtpVerify from 'react-native-otp-verify';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import {GenericStyles} from '../../styles/GenericStyles';
import {
  CustomTextInput,
  CustomButton,
  FullButtonComponent,
} from '../../lib';
import colors from '../../common/colors';
import {isAndroid, logErrorWithMessage} from '../../utilities/helperFunctions';
import TimerText from './TimerText';

const RESEND_OTP_TIME_LIMIT = 30; // 30 secs

let resendOtpTimerInterval;

const OtpVerification = function(props) {
    const [otpArray, setOtpArray] = useState(['', '', '', '']);
    // in secs, if value is greater than 0 then button will be disabled
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );

    // TextInput refs to focus programmatically while entering OTP
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);


    useEffect(() => {
        CutString();
        startResendOtpTimer();

        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);


    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
            clearInterval(resendOtpTimerInterval);
        } else {
            setResendButtonDisabledTime(resendButtonDisabledTime - 1);
        }
        }, 1000);
    };



    const refCallback = textInputRef => node => {
        textInputRef.current = node;
    };

    const onResendOtpButtonPress = () => {
        // clear last OTP
        if (firstTextInputRef) {
            setOtpArray(['', '', '', '']);
            firstTextInputRef.current.focus();
        }
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();

        // resend OTP Api call
        console.log('todo: Resend OTP');
    };


    // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
    const onOtpChange = index => {
        return value => {
            if (isNaN(Number(value))) {
                // do nothing when a non digit is pressed
                return;
            }
            const otpArrayCopy = otpArray.concat();
            console.log("otpArray: ", otpArray);
            otpArrayCopy[index] = value;

            console.log(' otpArrayCopy[index]: ',  otpArrayCopy[index]);
            setOtpArray(otpArrayCopy);

            // auto focus to next InputText if value is not blank
            if (value !== '') {
                if (index === 0) {
                secondTextInputRef.current.focus();
                } else if (index === 1) {
                thirdTextInputRef.current.focus();
                } else if (index === 2) {
                fourthTextInputRef.current.focus();
                }
            }
        };
    };

  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
    const onOtpKeyPress = index => {
        return ({nativeEvent: {key: value}}) => {
        // auto focus to previous InputText if value is blank and existing value is also blank
        if (value === 'Backspace' && otpArray[index] === '') {
            if (index === 1) {
            firstTextInputRef.current.focus();
            } else if (index === 2) {
            secondTextInputRef.current.focus();
            } else if (index === 3) {
            thirdTextInputRef.current.focus();
            }

            /**
             * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
             * doing this thing for us
             * todo check this behaviour on ios
             */
            if (isAndroid && index > 0) {
            const otpArrayCopy = otpArray.concat();
            otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
            setOtpArray(otpArrayCopy);
            }
        }
        };
    };

    const CutString = () =>{
        var codeOTP = props.otp;
        codeOTP = codeOTP.toString();

        const arrOtp = codeOTP.split('');
        console.log('cutOtp: ', arrOtp);

    }
    // const _onVerify = () =>{
    //     console.log('on SetupProfileScreen');
    //     props.navigation.navigate('SetupProfileScreen');  
    // };
    // console.log('Ma OTP: ', props.otp);

    return (

        // <View style={commonStyle.container}>
        //     <Image source={images.Logo2} style={styles.logo}/>
        //     <Text style={styles.wellCome}>Please enter the OTP received.</Text>
        //     <View style={{
        //         alignItems:'center', 
        //         width: '100%', 
        //         height: '100%', 
        //         paddingTop: hScale(205),
        //         // backgroundColor:'red'
        //     }}>
                <View style={styles.container}>
                    <View style={[GenericStyles.row, GenericStyles.mt12, styles.paddingInput]}>
                        {[
                        firstTextInputRef,
                        secondTextInputRef,
                        thirdTextInputRef,
                        fourthTextInputRef,
                        ].map((textInputRef, index) => (
                        <CustomTextInput
                            containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
                            value={otpArray[index]}
                            onKeyPress={onOtpKeyPress(index)}
                            onChangeText={onOtpChange(index)}
                            keyboardType={'numeric'}
                            maxLength={1}
                            style={[styles.otpText, GenericStyles.centerAlignedText]}
                            autoFocus={index === 0 ? true : undefined}
                            refCallback={refCallback(textInputRef)}
                            key={index}
                        />
                        ))}
                    </View>
              
                    {resendButtonDisabledTime > 0 ? (
                        <TimerText text={'Resend OTP in'} time={resendButtonDisabledTime} />
                    ) : (
                    <CustomButton
                        type={'link'}
                        text={'Resend OTP'}
                        buttonStyle={styles.otpResendButton}
                        textStyle={styles.otpResendButtonText}
                        onPress={onResendOtpButtonPress}
                    />
                    )}
                    {/* <View style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 86
                    }}>
                        <Button
                            onPress={_onVerify}
                            title='Verify'
                            buttonStyle={{width: '100%', height: hScale(50)}}
                            titleStyle={{fontSize: hScale(20)}}
                            ViewComponent={LinearGradient}
                            linearGradientProps={{
                            colors: ['#6A62EE', '#56EBFF'],
                            start: {x: 0, y: 0.2},
                            end: {x: 0.8, y: 1},
                            }}
                        />
                        <View style={{
                            width: '100%', 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent:'center', 
                            marginTop: hScale(20),
                        }}>
                            <Text style={{fontSize: hScale(12), color: colors.blackLight}}>Did not receive code?</Text>
                            <Text style={{fontSize: hScale(12), color: '#6968EF', marginLeft: hScale(5)}}>Resend OTP.</Text>
                        </View>
                    </View> */}
                </View>
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    paddingInput:{
        width: '100%',
        alignItems:'center',
        paddingHorizontal: hScale(40)
    },
    container: {
        // padding: 30,
        // backgroundColor:'blue',
        width: '100%',
        alignItems:'center',
        flex: 1
    },
    submitButtonText: {
        color: colors.WHITE,
    },
    otpResendButton: {
        alignItems: 'center',
        width: '100%',
        marginTop: 16,
    },
    otpResendButtonText: {
        color: colors.ORANGE,
        textTransform: 'none',
        textDecorationLine: 'underline',
    },
    otpText: {
        fontWeight: 'bold',
        color: '#232323',
        fontSize: 18,
        width: '100%',
    },
    logo:{
        width: hScale(57),
        height: hScale(47)
    },
    wellCome:{
        color: colors.txtBlack,
        fontSize: hScale(14),
        lineHeight: hScale(25),
        marginTop: hScale(20)
    },
    inputContainerStyle: {
        height: hScale(30),
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        padding: 0,
        width: hScale(35),
        margin: 0,

    },
    inputStyle: {
        color: colors.txtBlack,
        fontSize: hScale(16),
        textAlign:'center',
        paddingLeft:0
    },
    textError: {
        color: 'red',
        textAlign: 'left',
        marginLeft: hScale(20),
        marginTop: hScale(-25),
        fontSize: hScale(13)
    },
});

OtpVerification.defaultProps = {
  attempts: 5,
  otpRequestData: {
    username: 'varunon9',
    email_id: false,
    phone_no: true,
  },
};

OtpVerification.propTypes = {
  otpRequestData: PropTypes.object.isRequired,
  attempts: PropTypes.number.isRequired,
};

export default OtpVerification;











// import React, {useState, useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import {StyleSheet, View, ActivityIndicator} from 'react-native';
// import RNOtpVerify from 'react-native-otp-verify';

// import {GenericStyles} from '../../styles/GenericStyles';
// import {
//   NavigationHeader,
//   CustomScreenContainer,
//   CustomText,
//   CustomTextInput,
//   CustomButton,
//   FullButtonComponent,
// } from '../../lib';
// import ErrorBoundary from '../../common/ErrorBoundary';
// import colors from '../../common/colors';
// import {isAndroid, logErrorWithMessage} from '../../utilities/helperFunctions';
// import TimerText from './TimerText';

// const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
// const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

// let resendOtpTimerInterval;
// let autoSubmitOtpTimerInterval;

// const OtpVerification = function(props) {
//   const {otpRequestData, attempts} = props;

//   const [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
//   const [otpArray, setOtpArray] = useState(['', '', '', '']);
//   const [submittingOtp, setSubmittingOtp] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   // in secs, if value is greater than 0 then button will be disabled
//   const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
//     RESEND_OTP_TIME_LIMIT,
//   );

//   // 0 < autoSubmitOtpTime < 4 to show auto submitting OTP text
//   const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
//     AUTO_SUBMIT_OTP_TIME_LIMIT,
//   );

//   // TextInput refs to focus programmatically while entering OTP
//   const firstTextInputRef = useRef(null);
//   const secondTextInputRef = useRef(null);
//   const thirdTextInputRef = useRef(null);
//   const fourthTextInputRef = useRef(null);

//   // a reference to autoSubmitOtpTimerIntervalCallback to always get updated value of autoSubmitOtpTime
//   const autoSubmitOtpTimerIntervalCallbackReference = useRef();

//   useEffect(() => {
//     // autoSubmitOtpTime value will be set after otp is detected,
//     // in that case we have to start auto submit timer
//     autoSubmitOtpTimerIntervalCallbackReference.current = autoSubmitOtpTimerIntervalCallback;
//   });

//   useEffect(() => {
//     startResendOtpTimer();

//     return () => {
//       if (resendOtpTimerInterval) {
//         clearInterval(resendOtpTimerInterval);
//       }
//     };
//   }, [resendButtonDisabledTime]);

//   useEffect(() => {
//     // docs: https://github.com/faizalshap/react-native-otp-verify

//     RNOtpVerify.getOtp()
//       .then(p =>
//         RNOtpVerify.addListener(message => {
//           try {
//             if (message) {
//               const messageArray = message.split('\n');
//               if (messageArray[2]) {
//                 const otp = messageArray[2].split(' ')[0];
//                 if (otp.length === 4) {
//                   setOtpArray(otp.split(''));

//                   // to auto submit otp in 4 secs
//                   setAutoSubmitOtpTime(AUTO_SUBMIT_OTP_TIME_LIMIT);
//                   startAutoSubmitOtpTimer();
//                 }
//               }
//             }
//           } catch (error) {
//             logErrorWithMessage(
//               error.message,
//               'RNOtpVerify.getOtp - read message, OtpVerification',
//             );
//           }
//         }),
//       )
//       .catch(error => {
//         logErrorWithMessage(
//           error.message,
//           'RNOtpVerify.getOtp, OtpVerification',
//         );
//       });

//     // remove listener on unmount
//     return () => {
//       RNOtpVerify.removeListener();
//     };
//   }, []);

//   const startResendOtpTimer = () => {
//     if (resendOtpTimerInterval) {
//       clearInterval(resendOtpTimerInterval);
//     }
//     resendOtpTimerInterval = setInterval(() => {
//       if (resendButtonDisabledTime <= 0) {
//         clearInterval(resendOtpTimerInterval);
//       } else {
//         setResendButtonDisabledTime(resendButtonDisabledTime - 1);
//       }
//     }, 1000);
//   };

//   // this callback is being invoked from startAutoSubmitOtpTimer which itself is being invoked from useEffect
//   // since useEffect use closure to cache variables data, we will not be able to get updated autoSubmitOtpTime value
//   // as a solution we are using useRef by keeping its value always updated inside useEffect(componentDidUpdate)
//   const autoSubmitOtpTimerIntervalCallback = () => {
//     if (autoSubmitOtpTime <= 0) {
//       clearInterval(autoSubmitOtpTimerInterval);

//       // submit OTP
//       onSubmitButtonPress();
//     }
//     setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
//   };

//   const startAutoSubmitOtpTimer = () => {
//     if (autoSubmitOtpTimerInterval) {
//       clearInterval(autoSubmitOtpTimerInterval);
//     }
//     autoSubmitOtpTimerInterval = setInterval(() => {
//       autoSubmitOtpTimerIntervalCallbackReference.current();
//     }, 1000);
//   };

//   const refCallback = textInputRef => node => {
//     textInputRef.current = node;
//   };

//   const onResendOtpButtonPress = () => {
//     // clear last OTP
//     if (firstTextInputRef) {
//       setOtpArray(['', '', '', '']);
//       firstTextInputRef.current.focus();
//     }

//     setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
//     startResendOtpTimer();

//     // resend OTP Api call
//     // todo
//     console.log('todo: Resend OTP');
//   };

//   const onSubmitButtonPress = () => {
//     // API call
//     // todo
//     console.log('todo: Submit OTP');
//   };

//   // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
//   // using onOtpKeyPress for this purpose
//   const onOtpChange = index => {
//     return value => {
//       if (isNaN(Number(value))) {
//         // do nothing when a non digit is pressed
//         return;
//       }
//       const otpArrayCopy = otpArray.concat();
//       otpArrayCopy[index] = value;
//       setOtpArray(otpArrayCopy);

//       // auto focus to next InputText if value is not blank
//       if (value !== '') {
//         if (index === 0) {
//           secondTextInputRef.current.focus();
//         } else if (index === 1) {
//           thirdTextInputRef.current.focus();
//         } else if (index === 2) {
//           fourthTextInputRef.current.focus();
//         }
//       }
//     };
//   };

//   // only backspace key press event is fired on Android
//   // to have consistency, using this event just to detect backspace key press and
//   // onOtpChange for other digits press
//   const onOtpKeyPress = index => {
//     return ({nativeEvent: {key: value}}) => {
//       // auto focus to previous InputText if value is blank and existing value is also blank
//       if (value === 'Backspace' && otpArray[index] === '') {
//         if (index === 1) {
//           firstTextInputRef.current.focus();
//         } else if (index === 2) {
//           secondTextInputRef.current.focus();
//         } else if (index === 3) {
//           thirdTextInputRef.current.focus();
//         }

//         /**
//          * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
//          * doing this thing for us
//          * todo check this behaviour on ios
//          */
//         if (isAndroid && index > 0) {
//           const otpArrayCopy = otpArray.concat();
//           otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
//           setOtpArray(otpArrayCopy);
//         }
//       }
//     };
//   };

//   return (
//     <CustomScreenContainer>
//       <NavigationHeader
//         title={'Go back'}
//         leftIconAction={() => {}}
//         leftIconType={'back'}
//         containerStyle={GenericStyles.navigationHeaderBorder}
//       />
//       <ErrorBoundary screenName={'OtpVerification'}>
//         <View style={styles.container}>
//           <CustomText>
//             Enter OTP sent to your{' '}
//             {otpRequestData.email_id ? 'email' : 'mobile number'}{' '}
//           </CustomText>
//           <View style={[GenericStyles.row, GenericStyles.mt12]}>
//             {[
//               firstTextInputRef,
//               secondTextInputRef,
//               thirdTextInputRef,
//               fourthTextInputRef,
//             ].map((textInputRef, index) => (
//               <CustomTextInput
//                 containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
//                 value={otpArray[index]}
//                 onKeyPress={onOtpKeyPress(index)}
//                 onChangeText={onOtpChange(index)}
//                 keyboardType={'numeric'}
//                 maxLength={1}
//                 style={[styles.otpText, GenericStyles.centerAlignedText]}
//                 autoFocus={index === 0 ? true : undefined}
//                 refCallback={refCallback(textInputRef)}
//                 key={index}
//               />
//             ))}
//           </View>
//           {errorMessage ? (
//             <CustomText
//               style={[
//                 GenericStyles.negativeText,
//                 GenericStyles.mt12,
//                 GenericStyles.centerAlignedText,
//               ]}>
//               {errorMessage}
//             </CustomText>
//           ) : null}
//           {resendButtonDisabledTime > 0 ? (
//             <TimerText text={'Resend OTP in'} time={resendButtonDisabledTime} />
//           ) : (
//             <CustomButton
//               type={'link'}
//               text={'Resend OTP'}
//               buttonStyle={styles.otpResendButton}
//               textStyle={styles.otpResendButtonText}
//               onPress={onResendOtpButtonPress}
//             />
//           )}
//           <View style={GenericStyles.fill} />
//           {submittingOtp && <ActivityIndicator />}
//           {autoSubmitOtpTime > 0 &&
//           autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT ? (
//             <TimerText text={'Submitting OTP in'} time={autoSubmitOtpTime} />
//           ) : null}
//           <CustomText
//             style={[GenericStyles.centerAlignedText, GenericStyles.mt12]}>
//             {attemptsRemaining || 0} Attempts remaining
//           </CustomText>
//           <FullButtonComponent
//             type={'fill'}
//             text={'Submit'}
//             textStyle={styles.submitButtonText}
//             buttonStyle={GenericStyles.mt24}
//             onPress={onSubmitButtonPress}
//             disabled={submittingOtp}
//           />
//         </View>
//       </ErrorBoundary>
//     </CustomScreenContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     flex: 1,
//   },
//   submitButtonText: {
//     color: colors.WHITE,
//   },
//   otpResendButton: {
//     alignItems: 'center',
//     width: '100%',
//     marginTop: 16,
//   },
//   otpResendButtonText: {
//     color: colors.ORANGE,
//     textTransform: 'none',
//     textDecorationLine: 'underline',
//   },
//   otpText: {
//     fontWeight: 'bold',
//     color: colors.BLUE,
//     fontSize: 18,
//     width: '100%',
//   },
// });

// OtpVerification.defaultProps = {
//   attempts: 5,
//   otpRequestData: {
//     username: 'varunon9',
//     email_id: false,
//     phone_no: true,
//   },
// };

// OtpVerification.propTypes = {
//   otpRequestData: PropTypes.object.isRequired,
//   attempts: PropTypes.number.isRequired,
// };

// export default OtpVerification;