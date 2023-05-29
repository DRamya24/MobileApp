import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Draft from "../Draft";
import AppBar from "../Components/AppBar";



const Stack=createNativeStackNavigator()

export const DraftStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="DraftScreen"component={Draft}
             options={{headerTitle:(props)=> <AppBar title="Draft"/>}}/>
        </Stack.Navigator>
    )
}