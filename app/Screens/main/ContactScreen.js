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


const DataContact = [
    {
        id: 1,
        img: images.contact1,
        name: 'Julia Ferguson',
    },
    {
        id: 2,
        img: images.contact2,
        name: 'Shirley Hansen',
    },
    {
        id: 3,
        img: images.contact3,
        name: 'Jennifer Romero',
    },
    {
        id: 4,
        img: images.contact4,
        name: 'Pamela Little',
    },
    {
        id: 5,
        img: images.contact5,
        name: 'Catherine Gomez',
    },
    {
        id: 6,
        img: images.contact6,
        name: 'Kelly Ellis',
    },
    {
        id: 7,
        img: images.contact7,
        name: 'Kelly Walsh',
    },
    {
        id: 8,
        img: images.contact8,
        name: 'Marilyn King',
    },
    {
        id: 9,
        img: images.contact9,
        name: 'Marilyn King',
    },

]

export default class ContactScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchReults: '',
            dataSource: DataContact,
        };
        this.arrayholder = DataContact;
    };

    SearchFilterFunction(searchReults) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = searchReults.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          dataSource: newData,
          searchReults: searchReults,
        });
    };


    _renderItemContact = (item, index) =>{
        return(
            <View style={{
                width: width,
                paddingLeft: hScale(20),
            }}>
                <View style={{
                    borderBottomColor: colors.grayLight,
                    borderBottomWidth: 0.5,
                    flexDirection: 'row',
                    alignItems:'center',

                }}>
                    <Image source={item.img} style={{width: hScale(50), height: hScale(50),marginVertical: hScale(6)}}/>
                    <Text style={{color: colors.txtBlack, fontSize: hScale(16), marginLeft: hScale(10)}}>{item.name}</Text>
                </View>
            </View>
        )
    };

    


    render() {
        const {navigation} = this.props;
        return (
            <View style={commonStyle.containerMain}>
                <Header navigation={navigation} titleHeader={"Contacts"}/>
                <View style={{width: width, alignItems: 'center'}}>
                    <Input
                        // disabled={true}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                        placeholder="Search..."
                        rightIcon={
                            <TouchableOpacity>
                                <Image source={images.iconSearch} style={{width: hScale(18), height: hScale(21), marginRight: hScale(10)}}/>
                            </TouchableOpacity>
                        }
                        // onChangeText={value => this.setState({ searchReults: value })}
                        onChangeText={searchReults => this.SearchFilterFunction(searchReults)}
                        value={this.state.searchReults}
                        underlineColorAndroid="transparent"
                    />
                    <FlatList
                        data={this.state.dataSource}
                        enableEmptySections={true}
                        contentContainerStyle={{paddingBottom: hScale(500), alignItems:'center'}}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        renderItem={({item, index}) => this._renderItemContact(item, index)}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper:{
        width: width,
        height: height,
        borderTopLeftRadius: hScale(30),
        borderTopRightRadius: hScale(30),
        backgroundColor: colors.blueBlack,
        alignItems:"center",
    },
    inputContainerStyle:{
        width: hScale(355),
        height: hScale(40),
        backgroundColor: colors.bgSearch,
        borderBottomWidth: 0,
        marginTop: hScale(16)
    },
    inputStyle:{
        fontSize: hScale(14),
        paddingHorizontal: hScale(15),
        color: colors.txtBlack
    },
})