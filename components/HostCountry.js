import { View, Text, ScrollView, Image, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCountry, listCountry } from '../sagaapp/actions/action';
import styles from './styles';
import DetailsScreen from './DetailsScreen';
import { useNavigation } from '@react-navigation/native';

const HostCountry = () => {
  const dispatch = useDispatch();
  const countryListData = useSelector(state=>state.countrys);
  const navigation = useNavigation();
  const [sortData, setsortData] = useState("")
  
  
  const [countryLists, setCountryLists] = useState([])

  useEffect(()=>{
    dispatch(listCountry())
  },[])
  
  useEffect(()=>{

    if (sortData === "name") {
      // Create a new array and then sort it
      const sortedData = [...countryLists]?.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountryLists(sortedData);

    } else if (sortData === "population") {
      const sortedData = [...countryLists]?.sort((a, b) =>
        b.population - a.population
      );
      setCountryLists(sortedData);

    } else {
      setCountryLists(countryListData);
    }

  },[countryListData, sortData])
  // console.log("countryListData",countryListData)

  const handleNavigation = (name) => {
    navigation.navigate("DetailsScreen",{name:name,type:"name"})
  }

  const toggleButtonActive = {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'blue',
    marginLeft: 5,
  };

  const toggleButtonInactive = {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'gray',
    marginLeft: 5,
  };

  const handleDelete = (country) => {
      Alert.alert(
        'Confirm Deletion',
        `Are you sure you want to delete ${country.name.common}?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              dispatch(deleteCountry(country.cca3))
              setTimeout(() => {
                Alert.alert('Thank You for confirmation', 'Country deleted successfully!');
              }, 1000);
            },
          },
        ],
        { cancelable: false }
      );
  }
  return (
    <View>
      {countryLists ? (
        <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: 'flex-end', margin: 5 }}>
          <Text style={{ padding: 10, fontSize: 20 }}>Sort By:</Text>
          <TouchableOpacity
            style={sortData === 'name' ? toggleButtonActive : toggleButtonInactive}
            onPress={() => setsortData('name')}
          >
            <Text style={{ color: "white", fontWeight:'bold', fontSize:14 }}>Name</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={sortData === 'population' ? toggleButtonActive : toggleButtonInactive}
            onPress={() => setsortData("population")}>
            <Text style={{ color: "white", fontWeight:'bold', fontSize:14 }}>population</Text>
          </TouchableOpacity>
        </View>

        {countryLists.map((country, index)=>
        <TouchableOpacity  key={index} onPress={()=>handleNavigation(country.name.common)} onLongPress={()=>handleDelete(country)}>
          <View style={styles.view}>
            <Image source={{ uri: `${country.flags.png}` }} style={styles.image} />
            <Text style={styles.text}> Country Name : {country.name.common} </Text>
            <Text style={styles.text}> Country Population : {country.population} </Text>
          </View>
        </TouchableOpacity>
        )}
      </ScrollView>
      ) : ("loading.....") }
    </View>
  )
}

export default HostCountry