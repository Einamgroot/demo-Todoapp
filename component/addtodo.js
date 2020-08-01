import React , {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    Button,
    View,
} from 'react-native';

export default function AddTodo({submitHandler}) {
    const [Text, setText] = useState('');
    const changeHandler = (val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput 
            placeholder = 'new todo...' 
            onChangeText = {changeHandler}
            style = {styles.input} / >
            <Button onPress={() => submitHandler(Text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:3,
        borderBottomColor:'#ddd'
    }
})