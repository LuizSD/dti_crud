import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
    Main,
    Product
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
});

const App = createAppContainer(AppNavigator);

export default App;