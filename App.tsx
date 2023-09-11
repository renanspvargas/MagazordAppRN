import {StatusBar, View} from 'react-native';
import {AppRoutes} from './src/routes/app.routes';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <AppRoutes />
    </View>
  );
}

export default App;
