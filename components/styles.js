import { StyleSheet } from 'react-native'

export default  styles = StyleSheet.create({
    text:{
        fontSize:20,
    },
    view:{
        padding:20,
        borderWidth: 2, 
        borderColor:'#00000',
        borderRadius: 10,
        margin:10
    },
    image:{
        width:'100%',
        height:120,
        marginBottom:10
    },
    container: {
        flex: 1,
      },
      map: {
        flex: 1,
        width:"100%",
        height:250
      },
    button:{
        color:"white",
        fontSize:25,
        backgroundColor:"blue",
        width:70,
        padding:10,
        marginBottom:20
    }
})