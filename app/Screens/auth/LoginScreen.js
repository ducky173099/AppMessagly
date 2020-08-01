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
import {connect} from 'react-redux';
import { loginAction } from '../../redux/actions/AuthAction';


class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            mobliePhoneDefault: '',
            passwordDefault: '',
            isShowPass: false,
        }
    };


    componentWillReceiveProps = (nextProps, nextContext) => {
   
        const {data} = nextProps;
        console.log('data: ', data);
        if (data.success === true) {
            this.props.navigation.navigate('DrawerTab');
            return;
        }
        
    };


    _onLoginPress = async values => {
 
        const user = {mobilePhone: values.mobilePhone, password: values.password};
        await this.props.login(user);
    };

    _onSignUp = () =>{
        console.log('ojjjj');
        this.props.navigation.navigate('SignupScreen');  
    };

    
    render() {
        const {mobilePhoneDefault, passwordDefault, isShowPass} = this.state;
        return (
            <View style={commonStyle.container}>
                <Image source={images.Logo2} style={styles.logo}/>
                <Text style={styles.wellCome}>Welcome back,{'\n'} Please login to continue.</Text>
                <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    width: '100%', height: '100%', 
                    position:'absolute',
                    top: hScale(60),
                    left: hScale(40),
                    paddingTop: hScale(205),
                    // backgroundColor:'orange'
                }}>
                    <View style={{height: '100%', width:'100%',zIndex: 100,}}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={{mobilePhone: mobilePhoneDefault, password: passwordDefault}}
                            onSubmit={values => this._onLoginPress(values)}
                            validationSchema={yup.object().shape({
                                mobilePhone: yup.string().required("sdt k bo trong"),
                                password: yup.string().required("pass k dc bo trong"),
                            })}>
                            {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                            <>
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Mobile Number"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    onChangeText={handleChange('mobilePhone')}
                                    value={values.mobilePhone}
                                    keyboardType='phone-pad'
                                />
                                {touched.mobilePhone && errors.mobilePhone && <Text style={styles.textError}>{errors.mobilePhone}</Text>}
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Password"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    secureTextEntry={!isShowPass}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text style={styles.textError}>{errors.password}</Text>}
                                <View style={{width: '100%', top: -15, alignItems: 'flex-end'}}>
                                    <TouchableOpacity onPress={this._onForgot}>
                                        <Text style={{color: colors.blackLight}}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0
                                }}>
                                    <Button
                                        title='Login'
                                        onPress={handleSubmit}
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
                                        <Text style={{fontSize: hScale(12), color: colors.blackLight}}>Dont have an account?</Text>
                                        <TouchableOpacity onPress={this._onSignUp}>
                                            <Text style={{fontSize: hScale(12), color: colors.blueBlue, marginLeft: hScale(5)}}>Sign up here.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </>
                            )}
                        </Formik>
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
        login: user => dispatch(loginAction(user)),
    };  
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

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
        borderBottomWidth: 0.5,
        padding: 0,
        marginBottom: hScale(15)
        // backgroundColor: 'red'
    },
    inputStyle: {
        color: colors.txtBlack,
        fontSize: hScale(16),
        
    },
    textError: {
        color: 'red',
        textAlign: 'left',
        marginLeft: hScale(20),
        marginTop: hScale(-25),
        fontSize: hScale(13)
    },
    pinImage: {
        width: hScale(15),
        height: hScale(15),
        right: hScale(0),
        resizeMode: 'contain',
    },
    btnContinue:{
        width: hScale(327),
        height: hScale(40),
        borderRadius: hScale(100),
        backgroundColor: colors.greenLight,
        
    },
    txtContinue:{
        color: '#fff'
    }
});
