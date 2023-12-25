import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { countryName, editedCountry } from '../sagaapp/actions/action';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
    const { name, type, updatedCountry } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const singleCountryData = useSelector(state => state.country);
    const [singleCountryName, setsingleCountryName] = useState([])

    console.log("details screen props",updatedCountry)
    useEffect(() => {
            dispatch(countryName(name,type))
    }, [])

    useEffect(() => {
        setsingleCountryName(singleCountryData)
    }, [singleCountryData])

    // console.log("singleCountryName===> details page",singleCountryName)
    // console.log("singleCountryData===> details page",singleCountryData)

    const handleNavigateBorderCountry = (border) =>{
        dispatch(countryName(border,"alpha"))
    }

    const handleEditCountry = (singleCountry) =>{
        navigation.navigate("EditScreen",{country:singleCountry})
    }
    return (
        <View>
            {
                <View>
                    {singleCountryName?.map((singleCountry, index) =>
                        <View key={index}>
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity onPress={()=>handleEditCountry(singleCountry)}>
                                    <Text style={styles.button}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={{ uri: `${singleCountry.flags.png}` }} style={styles.image} />
                            <Text style={styles.text}>Country Name: {updatedCountry ? updatedCountry.name.common : singleCountry.name.common}</Text>
                            <Text style={styles.text}>Country Population: {updatedCountry ? updatedCountry.population : singleCountry.population}</Text>
                            <Text style={styles.text}>Region: {updatedCountry ? updatedCountry.region : singleCountry.region}</Text>
                            <Text style={styles.text}>Capital: {updatedCountry ? updatedCountry.capital : singleCountry.capital}</Text>
                            <Text style={styles.text}>Languages: {updatedCountry ? updatedCountry.languages.eng : singleCountry.languages.eng}</Text>
                            <Text style={styles.text}>Borders List:</Text>
                            {singleCountry.borders ? singleCountry.borders?.map((border,index)=>
                            <TouchableOpacity key={index} onPress={()=>handleNavigateBorderCountry(border)}>
                                <Text style={styles.text}> {border}</Text>
                            </TouchableOpacity>) : <Text style={styles.text}>Not Having Any Borders</Text>}
                        </View>
                    )}
                </View>
            }
        </View>
    )
}

export default DetailsScreen