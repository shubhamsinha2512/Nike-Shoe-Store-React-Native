import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Alert} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur'

import {COLORS, SIZES, images, FONTS} from '../constants/index';

function Home(){

    const [selectedItem, setSelectedItem] = React.useState(null);
    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false);
    const [selectedSize, setSelectedSize] = React.useState('');

    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);


    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "$119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "$124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "$108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);



    function renderTrendingShoes(item, index){

        var trendingStyle={};

        if(index == 0){
            trendingStyle:{ marginLeft: SIZES.padding}
        }

        return (
            <TouchableOpacity
                style={{
                    height:240,
                    width:180,
                    justifyContent:'center',
                    marginHorizontal:SIZES.base,
                    ...trendingStyle
                    // backgroundColor:'orange',
                }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <Text
                    style={{color:COLORS.gray, fontSize:SIZES.h5}}
                >
                    {item.type}
                </Text>

                <View
                    style={{
                        flex:1,
                        marginTop:SIZES.base,
                        justifyContent: 'flex-end',
                        borderRadius:10,
                        marginRight:SIZES.padding,
                        backgroundColor:item.bgColor,
                        paddingLeft:SIZES.radius,
                        paddingBottom:SIZES.radius,
                        paddingRight:SIZES.padding,
                        ...styles.trendingShadow
                    }}
                >
                    <View style={{height: '35%', justifyContent:'space-between'}}>
                        <Text style={{color:COLORS.white, fontSize:SIZES.body4}}>{item.name}</Text>
                        <Text style={{color:COLORS.white, fontSize:SIZES.h3}}>{item.price}</Text>
                    </View>

                    <View style={{position:'absolute', top:0, right:0, width:'95%', height:'100%'}}>
                        <Svg height='100%'width='100%'>
                            <Polygon 
                                points="0,0 168,0 168,80"
                                fill='white'
                            />
                        </Svg>
                    </View>
                </View>

                <Image 
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        position:'absolute',
                        top:50,
                        right:0,
                        width:'98%',
                        height:80,
                        transform:[{rotate:'-15deg'}],
                        elevation:8
                    }}
                />

            </TouchableOpacity>
        )
    }

    function renderRecentlyViewed(item, index){
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderShoeSizes() {
        return (
            selectedItem.sizes.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 35,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedSize(item)
                        }}
                    >
                        <Text style={{ color: selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white, ...FONTS.body4 }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <Text
                style={{
                    marginTop:SIZES.radius,
                    marginHorizontal:SIZES.padding,
                    ...FONTS.largeTitleBold
                }}
            >
                Trending
            </Text>


            <View
                style={{
                    marginTop:SIZES.radius,
                    height:260,
                    // backgroundColor:'red'
                }}
            >
                <FlatList
                    // style={{backgroundColor:'green'}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderTrendingShoes(item, index)}
                />
            </View>

            {/* Recently Viewed */}
            <View
                style={{
                    flex:1,
                    flexDirection:'row',
                    // justifyContent:'flex-start',
                    marginTop:SIZES.padding,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    backgroundColor:COLORS.white,
                    ...styles.recentContainerShadow
                }}
            >

                <View style={{widht:70, marginLeft:SIZES.base}}>
                    <Image 
                        source={images.recentlyViewedLabel}
                        resizeMode='contain'
                        style={{height:'100%', width:'10%'}}
                    />
                </View>

                <View style={{flex:1, paddingBottom: SIZES.padding}}>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item, index})=> renderRecentlyViewed(item, index)}
                    />
                </View>
            </View>

            {/* Modal */}
            {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setShowAddToBagModal(false);
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        
                        <TouchableOpacity
                            style={styles.absolute}
                            onPress={() => {
                                setSelectedItem(null);
                                setSelectedSize("");
                                setShowAddToBagModal(false);
                            }}
                        >
                        </TouchableOpacity>

                        
                        <View style={{ justifyContent: 'center', width: "75%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        marginTop:SIZES.padding * 3,
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price}</Text>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <View>
                                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                    {renderShoeSizes()}
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => {
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.white
    },
    trendingShadow:{
        shadowColor:'#000',
        shadowOffset:{height: 5, width:0},
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7
    },
    recentContainerShadow:{
        shadowColor:'#000',
        shadowOffset:{widht:0, height:7},
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation:15
    },
    absolute:{
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0
    }
});

export default Home;