import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import { Input, Button } from 'react-native-elements';
import Header from '../../components/Header';
import SegmentedControlTab from "react-native-segmented-control-tab";



const DataFavourites = [
    {
        id: 1,
        img: images.fav2
    },
    {
        id: 2,
        img: images.fav3
    },
    {
        id: 3,
        img: images.fav4
    },
    {
        id: 4,
        img: images.fav5
    },
    {
        id: 5,
        img: images.fav6
    },
    {
        id: 6,
        img: images.fav6
    },
];

const DataAllChats = [
    {
        id: 1,
        img: images.ava1,
        name: 'Denise Clark',
        message: 'Hi babe, whatsup?',
        time: 'Now'
    },
    {
        id: 2,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 3,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 4,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 5,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 6,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 7,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },
    {
        id: 8,
        img: images.ava2,
        name: 'Cynthia Richards',
        message: 'Can you call me now?',
        time: '12:05pm'
    },

];

const dataTab = ['All Chats', 'Unread', 'Groups'];

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }


    openDrawer = () =>{
        // this.props.navigation.navigate.openDrawer();
        // this.props.navigation.navigate('DrawerOpen');
        this.props.navigation.openDrawer();
    };

    handleCustomIndexSelect = (index) => {
        this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    };

    _renderItemFavourites = (item, index) => {
        return (
            <TouchableOpacity style={{marginRight: hScale(15)}}>
                {/* <View> */}
                    <Image source={item.img} style={{width: hScale(50), height: hScale(50)}}/>
                {/* </View> */}
            </TouchableOpacity>
        );
    };

    _renderItemAllChats = (item, index) =>{
        return(
            <View style={{
                width: width, 
                paddingHorizontal: hScale(20), 
                flexDirection: 'row',
                alignItems: "center"
            }}>
                    <Image style={{width: hScale(80), height: hScale(80)}} source={item.img}/>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>{item.name}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: hScale(14), color: colors.txtBlack}}>{item.message}</Text>
                            <Text style={{fontSize: hScale(12), color: colors.grayLight}}>{item.time}</Text>
                        </View>
                    </View>
            </View>
        )
    }


    render() {
        const {navigation} = this.props;
        const {selectedIndex} = this.state;

        return (
            <View style={commonStyle.containerMain}>
                <Header navigation={navigation} titleHeader={"Chats"}/>
                <View style={{width: width}}>
                    <View style={{width: width, paddingHorizontal: hScale(20)}}>
                        <Text style={{marginVertical: hScale(15)}}>Favourites</Text>
                        <FlatList
                            data={DataFavourites}
                            enableEmptySections={true}
                            // contentContainerStyle={{paddingBottom: hScale(200), alignItems:'center'}}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={true}
                            horizontal={true}
                            renderItem={({item, index}) => this._renderItemFavourites(item, index)}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    <View style={{width: width}}>
                        <SegmentedControlTab
                            values={dataTab}
                            selectedIndex={selectedIndex}
                            onTabPress={this.handleCustomIndexSelect}
                            borderRadius={0}
                            tabsContainerStyle={{
                                marginTop: hScale(30), 
                                marginBottom: hScale(16), 
                                width: hScale(220), 
                                marginLeft: hScale(20),
                            }}
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.activeTabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabTextStyle={styles.ActiveTabTextStyle}
                        />
                        {selectedIndex === 0 && 
                            <View style={{height: height}}>
                                <FlatList
                                    data={DataAllChats}
                                    enableEmptySections={true}
                                    contentContainerStyle={{paddingBottom: hScale(250)}}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={false}
                                    renderItem={({item, index}) => this._renderItemAllChats(item, index)}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </View>
                        }
                        {selectedIndex === 1 && 
                            <View>
                                <Text>111111111</Text>
                            </View>
                        }
                        {selectedIndex === 2 && 
                            <View>
                                <Text>222222222222</Text>
                            </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor: colors.transparent,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    activeTabStyle:{
        backgroundColor: colors.transparent,
        borderBottomWidth: hScale(0.5),
        borderBottomColor: colors.blueBlue
    },
    tabTextStyle:{
        color: colors.grayLight,
        fontSize: hScale(14)
    },
    ActiveTabTextStyle:{
        color: colors.txtBlack,
        fontSize: hScale(14),
       
    }
})