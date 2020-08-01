import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import * as yup from 'yup';
import {Formik} from 'formik';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import OtpVerification  from '../../components/otp/OtpVerification';
import {connect} from 'react-redux';
import { signupAction } from '../../redux/actions/AuthAction';
import Toast from '../../components/Toast';



class OTPScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowPass: false,
            otp: '',
        }
    };

    componentWillReceiveProps = (nextProps, nextContext) => {
   
        // const {data} = nextProps;
        // console.log('data: ', data);
        // if (data.success === true) {
        //     this.props.navigation.navigate('DrawerTab');
        //     return;
        // }
    };


    componentWillMount = () =>{
        const {data} = this.props;
        console.log('data: ', data);

        // const {otp} = this.state;
        // this.setState({
        //     otp: this.props.data.user.ValueOTP
        // })

        // var otppppp = this.props.data.user.ValueOTP;
        // otppppp = otppppp.toString();

        // const cutOtp = otppppp.split('');
        // console.log('cutOtp: ', cutOtp);

        this.firstAsync(data.user.ValueOTP);


    }

    async firstAsync(otp) {
        let promise = new Promise((res, rej) => {
            setTimeout(() => res("Now it's done!"), 2000)
        });
    
        // wait until the promise returns us a value
        let result = await promise; 
      
        // "Now it's done!"
        // alert(result); 
        this.refs.toast.show(
            <View style={styles.viewDialog}>
                {/* <Image style={styles.group83} source={images.backIcon}/> */}
                <Text style={styles.txtDialog}>Mã OTP của bạn là: {otp}</Text>
            </View>
        ,2000);

    };

    _onVerify = () =>{
        this.props.navigation.navigate('SetupProfileScreen');  
    }


    render() {
        
        return (
            <View style={commonStyle.container}>
                <Image source={images.Logo2} style={styles.logo}/>
                <Text style={styles.wellCome}>Please enter the OTP received.</Text>
                <Toast
                    ref="toast"
                    style={styles.containerDialog}
                    position='top'
                />
                <View style={{
                    alignItems:'center', 
                    width: '100%', 
                    height: '100%', 
                    paddingTop: hScale(205),
                    // backgroundColor:'red'
                }}>
                    <Text>{this.props.data.user.ValueOTP}</Text>
                    <OtpVerification otp={this.props.data.user.ValueOTP}/>
                    <View style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 86
                    }}>
                        <Button
                            onPress={this._onVerify}
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
                    </View>
                </View>
            </View>
        )
    }
};


const mapStateToProps = state => {
    return {
        data: state.authReducer,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signupAction(user)),
    };  
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OTPScreen);


const styles = StyleSheet.create({
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
    viewDialog:{
        alignItems:'center',
        justifyContent:'center',
    },  
    txtDialog:{
        fontSize: hScale(12),
        color: '#fff',
        // marginTop: vScale(20)
    },  
    group83:{
        width: hScale(74),
        height: hScale(75),
    },  
    containerDialog:{
        width: hScale(230),
        height: vScale(40),
        backgroundColor: colors.txtBlack,
        borderRadius: hScale(90),
        alignItems:'center',
        justifyContent:'center',
    },
    
    
});

// import React, {useState, useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import {
//     StyleSheet, 
//     View, 
//     Text,
//     Image,
// } from 'react-native';
// import { Input, Button } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
// import RNOtpVerify from 'react-native-otp-verify';
// import commonStyle from '../../styles/common';
// import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
// import images from '../../assets/images';
// import {GenericStyles} from '../../styles/GenericStyles';
// import {
//   CustomTextInput,
//   CustomButton,
//   FullButtonComponent,
// } from '../../lib';
// import colors from '../../common/colors';
// import {isAndroid, logErrorWithMessage} from '../../utilities/helperFunctions';
// import TimerText from '../../components/otp/TimerText';

// const RESEND_OTP_TIME_LIMIT = 30; // 30 secs

// let resendOtpTimerInterval;

// const OTPScreen = function(props) {
//     const [otpArray, setOtpArray] = useState(['', '', '', '']);
//     // in secs, if value is greater than 0 then button will be disabled
//     const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
//         RESEND_OTP_TIME_LIMIT,
//     );

//     // TextInput refs to focus programmatically while entering OTP
//     const firstTextInputRef = useRef(null);
//     const secondTextInputRef = useRef(null);
//     const thirdTextInputRef = useRef(null);
//     const fourthTextInputRef = useRef(null);


//     useEffect(() => {
//         startResendOtpTimer();

//         return () => {
//             if (resendOtpTimerInterval) {
//                 clearInterval(resendOtpTimerInterval);
//             }
//         };
//     }, [resendButtonDisabledTime]);


//     const startResendOtpTimer = () => {
//         if (resendOtpTimerInterval) {
//         clearInterval(resendOtpTimerInterval);
//         }
//         resendOtpTimerInterval = setInterval(() => {
//         if (resendButtonDisabledTime <= 0) {
//             clearInterval(resendOtpTimerInterval);
//         } else {
//             setResendButtonDisabledTime(resendButtonDisabledTime - 1);
//         }
//         }, 1000);
//     };



//     const refCallback = textInputRef => node => {
//         textInputRef.current = node;
//     };

//     const onResendOtpButtonPress = () => {
//         // clear last OTP
//         if (firstTextInputRef) {
//             setOtpArray(['', '', '', '']);
//             firstTextInputRef.current.focus();
//         }
//         setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
//         startResendOtpTimer();

//         // resend OTP Api call
//         console.log('todo: Resend OTP');
//     };


//     // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
//     const onOtpChange = index => {
//         return value => {
//             if (isNaN(Number(value))) {
//                 // do nothing when a non digit is pressed
//                 return;
//             }
//             const otpArrayCopy = otpArray.concat();
//             console.log("otpArray: ", otpArray);
//             otpArrayCopy[index] = value;

//             console.log(' otpArrayCopy[index]: ',  otpArrayCopy[index]);
//             setOtpArray(otpArrayCopy);

//             // auto focus to next InputText if value is not blank
//             if (value !== '') {
//                 if (index === 0) {
//                 secondTextInputRef.current.focus();
//                 } else if (index === 1) {
//                 thirdTextInputRef.current.focus();
//                 } else if (index === 2) {
//                 fourthTextInputRef.current.focus();
//                 }
//             }
//         };
//     };

//   // only backspace key press event is fired on Android
//   // to have consistency, using this event just to detect backspace key press and
//   // onOtpChange for other digits press
//     const onOtpKeyPress = index => {
//         return ({nativeEvent: {key: value}}) => {
//         // auto focus to previous InputText if value is blank and existing value is also blank
//         if (value === 'Backspace' && otpArray[index] === '') {
//             if (index === 1) {
//             firstTextInputRef.current.focus();
//             } else if (index === 2) {
//             secondTextInputRef.current.focus();
//             } else if (index === 3) {
//             thirdTextInputRef.current.focus();
//             }

//             /**
//              * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
//              * doing this thing for us
//              * todo check this behaviour on ios
//              */
//             if (isAndroid && index > 0) {
//             const otpArrayCopy = otpArray.concat();
//             otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
//             setOtpArray(otpArrayCopy);
//             }
//         }
//         };
//     };

//     const _onVerify = () =>{
//         console.log('on SetupProfileScreen');
//         props.navigation.navigate('SetupProfileScreen');  
//     };

//     return (
//         <View style={commonStyle.container}>
//             <Image source={images.Logo2} style={styles.logo}/>
//             <Text style={styles.wellCome}>Please enter the OTP received.</Text>
//             <View style={{
//                 alignItems:'center', 
//                 width: '100%', 
//                 height: '100%', 
//                 paddingTop: hScale(205),
//                 // backgroundColor:'red'
//             }}>
//                 <View style={styles.container}>
//                     <View style={[GenericStyles.row, GenericStyles.mt12, styles.paddingInput]}>
//                         {[
//                         firstTextInputRef,
//                         secondTextInputRef,
//                         thirdTextInputRef,
//                         fourthTextInputRef,
//                         ].map((textInputRef, index) => (
//                         <CustomTextInput
//                             containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
//                             value={otpArray[index]}
//                             onKeyPress={onOtpKeyPress(index)}
//                             onChangeText={onOtpChange(index)}
//                             keyboardType={'numeric'}
//                             maxLength={1}
//                             style={[styles.otpText, GenericStyles.centerAlignedText]}
//                             autoFocus={index === 0 ? true : undefined}
//                             refCallback={refCallback(textInputRef)}
//                             key={index}
//                         />
//                         ))}
//                     </View>
              
//                     {resendButtonDisabledTime > 0 ? (
//                         <TimerText text={'Resend OTP in'} time={resendButtonDisabledTime} />
//                     ) : (
//                     <CustomButton
//                         type={'link'}
//                         text={'Resend OTP'}
//                         buttonStyle={styles.otpResendButton}
//                         textStyle={styles.otpResendButtonText}
//                         onPress={onResendOtpButtonPress}
//                     />
//                     )}
//                     <View style={{
//                         width: '100%',
//                         position: 'absolute',
//                         bottom: 86
//                     }}>
//                         <Button
//                             onPress={_onVerify}
//                             title='Verify'
//                             buttonStyle={{width: '100%', height: hScale(50)}}
//                             titleStyle={{fontSize: hScale(20)}}
//                             ViewComponent={LinearGradient}
//                             linearGradientProps={{
//                             colors: ['#6A62EE', '#56EBFF'],
//                             start: {x: 0, y: 0.2},
//                             end: {x: 0.8, y: 1},
//                             }}
//                         />
//                         <View style={{
//                             width: '100%', 
//                             flexDirection: 'row', 
//                             alignItems: 'center', 
//                             justifyContent:'center', 
//                             marginTop: hScale(20),
//                         }}>
//                             <Text style={{fontSize: hScale(12), color: colors.blackLight}}>Did not receive code?</Text>
//                             <Text style={{fontSize: hScale(12), color: '#6968EF', marginLeft: hScale(5)}}>Resend OTP.</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     paddingInput:{
//         width: '100%',
//         alignItems:'center',
//         paddingHorizontal: hScale(40)
//     },
//     container: {
//         // padding: 30,
//         // backgroundColor:'blue',
//         width: '100%',
//         alignItems:'center',
//         flex: 1
//     },
//     submitButtonText: {
//         color: colors.WHITE,
//     },
//     otpResendButton: {
//         alignItems: 'center',
//         width: '100%',
//         marginTop: 16,
//     },
//     otpResendButtonText: {
//         color: colors.ORANGE,
//         textTransform: 'none',
//         textDecorationLine: 'underline',
//     },
//     otpText: {
//         fontWeight: 'bold',
//         color: '#232323',
//         fontSize: 18,
//         width: '100%',
//     },
//     logo:{
//         width: hScale(57),
//         height: hScale(47)
//     },
//     wellCome:{
//         color: colors.txtBlack,
//         fontSize: hScale(14),
//         lineHeight: hScale(25),
//         marginTop: hScale(20)
//     },
//     inputContainerStyle: {
//         height: hScale(30),
//         borderBottomColor: colors.gray,
//         borderBottomWidth: 1,
//         padding: 0,
//         width: hScale(35),
//         margin: 0,

//     },
//     inputStyle: {
//         color: colors.txtBlack,
//         fontSize: hScale(16),
//         textAlign:'center',
//         paddingLeft:0
//     },
//     textError: {
//         color: 'red',
//         textAlign: 'left',
//         marginLeft: hScale(20),
//         marginTop: hScale(-25),
//         fontSize: hScale(13)
//     },
// });

// OTPScreen.defaultProps = {
//   attempts: 5,
//   otpRequestData: {
//     username: 'varunon9',
//     email_id: false,
//     phone_no: true,
//   },
// };

// OTPScreen.propTypes = {
//   otpRequestData: PropTypes.object.isRequired,
//   attempts: PropTypes.number.isRequired,
// };

// export default OTPScreen;
