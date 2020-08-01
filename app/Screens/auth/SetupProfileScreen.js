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
import ImagePicker from 'react-native-image-picker';

export default class SetupProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            newPassDefault:'',
            confirmPassDefault:'',
            filePath: {},
            isShowPass: false,
        }
    };

    chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
        //   console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              filePath: source,
            });
          }
        });
    };

    _onGetStarted = () =>{
        console.log('ok ban nha');
        this.props.navigation.navigate('DrawerTab');  
    };



    render() {
        const {newPassDefault, confirmPassDefault, filePath, isShowPass} = this.state;
        // console.log('filePath: ', filePath.length);

        const uri = this.state.filePath.uri;
        // console.log('uri :', uri);
        return (
            <View style={commonStyle.container}>
                <Image source={images.Logo2} style={styles.logo}/>
                <Text style={styles.wellCome}>Welcome to Messagly!</Text>
                <TouchableOpacity onPress={this.chooseFile.bind(this)}>
                    {uri === undefined ? 
                        <Image
                            source={images.setupProfile}
                            style={{width: hScale(120), height: hScale(120), marginTop: hScale(42)}}
                        /> 
                        :   
                        <Image
                            source={{uri: 'data:image/jpeg;base64,' + this.state.filePath.data}}
                            style={{width: hScale(120), height: hScale(120), marginTop: hScale(42)}}
                        />
                    }
                </TouchableOpacity>
                
                {/* <Image
                    source={{
                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                    }}
                    style={{ width: 100, height: 100 }}
                />
                <Image
                    source={{ uri: this.state.filePath.uri }}
                    style={{ width: 250, height: 250 }}
                />
                <Text style={{ alignItems: 'center' }}>
                    {this.state.filePath.uri}
                </Text> */}
      
                <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    width: '100%', height: '100%', 
                    position:'absolute',
                    top: hScale(60),
                    left: hScale(40),
                    paddingTop: hScale(280)
                }}>
                    <View style={{height: '100%', width:'100%'}}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={{newPass: newPassDefault, confirmPass: confirmPassDefault}}
                            onSubmit={values => this._onGetStarted(values)}
                            validationSchema={yup.object().shape({
                                newPass: yup.string().required("Mật khẩu mới không được bỏ trống"),
                                confirmPass: yup.string().required("Mật khẩu nhập lại không được bỏ trống"),
                            })}>
                            {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                            <>
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Password"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    secureTextEntry={!isShowPass}
                                    onChangeText={handleChange('newPass')}
                                    value={values.newPass}
                                />
                                {touched.newPass && errors.newPass && <Text style={styles.textError}>{errors.newPass}</Text>}
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Confirm Password"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    secureTextEntry={!isShowPass}
                                    onChangeText={handleChange('confirmPass')}
                                    value={values.confirmPass}
                                />
                                {touched.confirmPass && errors.confirmPass && <Text style={styles.textError}>{errors.confirmPass}</Text>}
                                <View style={{
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 20
                                }}>
                                    <Button
                                        onPress={handleSubmit}
                                        title='Get Started'
                                        buttonStyle={{width: '100%', height: hScale(50)}}
                                        titleStyle={{fontSize: hScale(20)}}
                                        ViewComponent={LinearGradient}
                                        linearGradientProps={{
                                        colors: ['#6A62EE', '#56EBFF'],
                                        start: {x: 0, y: 0.2},
                                        end: {x: 0.8, y: 1},
                                        }}
                                    />
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
 
});

