import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    // Switch
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import { Input, Button } from 'react-native-elements';
import Header from '../../components/Header';
import { Switch } from 'react-native-switch';

export default class SettingScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            switchValue1: false,
            switchValue2: false,
            switchValue3: false,
            switchValue4: false,
            switchValue5: false,
            switchValue6: false,
        }
    }

    toggleSwitch = value => {
        const {switchValue1,switchValue2,switchValue3,switchValue4,switchValue5,switchValue6} = this.state;
        // switch (value) {
        //     case '1':
        //         switchValue1 = !switchValue1;
        //         break;
        //     case '2':
        //         switchValue2 = !switchValue2;
        //         break;
        //     case '3':
        //         switchValue3 = !switchValue3;
        //         break;
        //     case '4':
        //         switchValue4 = !switchValue4;
        //         break;
        //     case '5':
        //         switchValue5 = !switchValue5;
        //         break;
        //     case '6':
        //         switchValue6 = !switchValue6;
        //         break;
        //     default:
        //       break;
        // }

        console.log('valuee kyyyyyyyyyyyyyyyy: ', value);
        this.setState({
            switchValue1: !switchValue1,
            // switchValue2: value,
            // switchValue3: value,
            // switchValue4: switchValue4,
            // switchValue5: switchValue5,
            // switchValue6: switchValue6,
        });
    }


    render() {
        const {navigation} = this.props;
        const {switchValue1,switchValue2,switchValue3,switchValue4,switchValue5,switchValue6} = this.state;

        return (
            <View style={commonStyle.containerMain}>
                <Header navigation={navigation} titleHeader={"Settings"} hideBtn={'hide'}/>
                <View style={{width: width, paddingHorizontal: hScale(20), paddingTop: hScale(15)}}>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                        height: hScale(64),
                    }}>
                        <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Privacy</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between',marginTop: hScale(13)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Be Discoverable By Others</Text>
                            {/* <Switch
                                thumbColor={colors.white}
                                trackColor={colors.blueBlue}
                                onValueChange = {this.toggleSwitch}
                                value = {this.state.switchValue}
                                style={{ width: hScale(40)}}
                            /> */}
                            <Switch
                                value={this.state.switchValue1}
                                onValueChange={() => this.setState({ switchValue1: !switchValue1 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', paddingTop: hScale(16), paddingBottom: hScale(10)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Show Status</Text>
                            <Switch
                                value={this.state.switchValue2}
                                onValueChange={() => this.setState({ switchValue2: !switchValue2 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>
                    <View style={{
                        // borderBottomWidth: 0.5,
                        // borderBottomColor: colors.grayLight,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', paddingTop: hScale(16), paddingBottom: hScale(10)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Show Display Picture</Text>
                            <Switch
                                value={this.state.switchValue3}
                                onValueChange={() => this.setState({ switchValue3: !switchValue3 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>

                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                        height: hScale(64),
                        marginTop: hScale(40)
                    }}>
                        <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Notifications</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between',marginTop: hScale(13)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Sounds</Text>
                            {/* <Switch
                                thumbColor={colors.white}
                                trackColor={colors.blueBlue}
                                onValueChange = {this.toggleSwitch}
                                value = {this.state.switchValue}
                                style={{ width: hScale(40)}}
                            /> */}
                            <Switch
                                value={this.state.switchValue4}
                                onValueChange={() => this.setState({ switchValue4: !switchValue4 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', paddingTop: hScale(16), paddingBottom: hScale(10)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Vibration</Text>
                            <Switch
                                value={this.state.switchValue5}
                                onValueChange={() => this.setState({ switchValue5: !switchValue5 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>
                    <View style={{
                        // borderBottomWidth: 0.5,
                        // borderBottomColor: colors.grayLight,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', paddingTop: hScale(16), paddingBottom: hScale(10)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Message Preview</Text>
                            <Switch
                                value={this.state.switchValue6}
                                onValueChange={() => this.setState({ switchValue6: !switchValue6 })}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={hScale(18)}
                                barHeight={hScale(20)}
                                circleBorderWidth={0}
                                backgroundActive={colors.blueBlue}
                                backgroundInactive={colors.grayLight}
                                circleActiveColor={colors.white}
                                circleInActiveColor={colors.white}
                                changeValueImmediately={true}
                                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                outerCircleStyle={{}} // style for outer animated circle
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                            />
                        </View>
                    </View>

                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                        height: hScale(64),
                        marginTop: hScale(40)
                    }}>
                        <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Account</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between',marginTop: hScale(13)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Update Mobile Number</Text>
                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.grayLight,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', paddingTop: hScale(16), paddingBottom: hScale(10)}}>
                            <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>Change Password</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: hScale(16), color: 'red', marginTop: hScale(16)}}>Delete Account</Text>


                </View>
            </View>
        )
    }
}
