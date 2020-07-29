import react , {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    Button,
    View,
} from 'react-native';

export default function AddTodo() {
    const [Text, setText] = useState('');
    const changeHandler = (val)=>{
        setText(val);
    }
    return(
        <view>
            <TextInput 
            placeholder = 'new todo...' 
            onChangeText = {changeHandler}
            style = {style.input} / >
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </view>
    )
}

const input = StyleSheet.create({
    input :{
        marginBotton:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        botderBottomColor:'#ddd'
    }
})