import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../Pages/Welcome'
import Signin from '../Pages/Signin'



const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Welcome"
             component={Welcome}
             options={{headerShown: false}}
            />

          <Stack.Screen 
           name="Signin"
           component={Signin}
           options={{headerShown: false}} 
          />
        </Stack.Navigator>
    )
}