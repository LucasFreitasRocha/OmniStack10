import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main/Main';
import Profile from './pages/profile/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
            },
        },
    },{
       defaultNavigationOptions: {
           headerTintColor: '#fff',
           headerBackTitleVisible: false,
           headerStyle: {
               backgroundColor: '#7d40e7',
           }
       } 
    })
);
export default Routes;