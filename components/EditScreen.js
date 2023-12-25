import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { editedCountry } from '../sagaapp/actions/action';

const EditScreen = ({route}) => {
    const country = route.params.country || {};
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const initialState = {
        name: country.name.common,
        officialName: country.name.official,
        population: country.population.toString(),
        capital: country.capital && country.capital[0],
        region: country.region
    }
    // Use individual state variables for editable fields
    const [updateDetails, setUpdateDetails] = useState(initialState);
    // const [officialName, setOfficialName] = useState(country.name.official);
    // const [population, setPopulation] = useState(country.population.toString());
    // const [capital, setCapital] = useState(country.capital && country.capital[0]);
    // const [region, setRegion] = useState(country.region);

    const goBack = () => {
        navigation.goBack();
    };
    const handleSave = () => {
        // Prepare the updated data
        console.log("initialState.name",initialState.name)
        const updatedData = {
            ...country,
            name: {
                common: updateDetails.name,
                official: updateDetails.officialName,
            },
            population: parseInt(updateDetails.population, 10),
            capital: [updateDetails.capital],
            region: updateDetails.region,
        };
        dispatch(editedCountry(updatedData))
        // Navigate back
        navigation.navigate("DetailsScreen",{updatedCountry: updatedData})
        console.log("updatedData==>",updatedData)
    };
    const handleInputChange = (field, value) => {
        setUpdateDetails({ ...updateDetails, [field]: value });
    };
    console.log("updateDetails",updateDetails)
    
    return (
        <View style={styles.editcontainer}>
            <View>
                <Text style={styles.text}>Name:</Text>
                <TextInput
                    style={styles.TextInput}
                    value={updateDetails.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
            </View>

            <View>
                <Text style={styles.text}>Official name:</Text>
                <TextInput
                    style={styles.TextInput}
                    value={updateDetails.officialName}
                    onChangeText={(text) => handleInputChange('officialName', text)}
                />
            </View>

            <View>
                <Text style={styles.text}>Population</Text>
                <TextInput
                    style={styles.TextInput}
                    value={updateDetails.population}
                    onChangeText={(text) => handleInputChange('population', text)}
                />
            </View>

            <View>
                <Text style={styles.text}>Capital:</Text>
                <TextInput
                    style={styles.TextInput}
                    value={updateDetails.capital}
                    onChangeText={(text) => handleInputChange('capital', text)}
                />
            </View>

            <View>
                <Text style={styles.text}>Region:</Text>
                <TextInput
                    style={styles.TextInput}
                    value={updateDetails.region}
                    onChangeText={(text) => handleInputChange('region', text)}
                />
            </View>

            <TouchableOpacity style={styles.backButton} onPress={handleSave}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, margin: 5 }}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, margin: 5 }}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    editcontainer: {
        flex: 1,
        width: '95%',
        height: '80%',
        padding: 10,
    },
    backButton: {
        backgroundColor: 'blue',
        margin: 20,
        padding: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    TextInput: {
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 7,
    },
});
