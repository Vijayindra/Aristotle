// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React, { useEffect } from "react";;

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeScreen from "./screens/HomeScreen";
// import OnboardingScreen from "./screens/OnboardingScreen";
// import ChatBot from './screens/ChatBot';
// import CameraScreen from './components/CameraScreen';

// const AppStack = createStackNavigator();

// const App = () => {
//   const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
//   useEffect(()=>{
//     AsyncStorage.getItem('AlreadyLaunched').then(value=> {
//       if(value==null){
//         AsyncStorage.setItem('AlreadyLaunched','true');
//         setIsFirstLaunch(true);
//       }else{
//         setIsFirstLaunch(false);
//       }
//     })
//   },[]);

//   if(isFirstLaunch == null){
//     return null;
//   }else if(isFirstLaunch == true){
//     return <HomeScreen />
//     // return(
//     //   <NavigationContainer>
//     //     <AppStack.Navigator headerShown = "false">
//     //       <AppStack.Screen name="Aristotle" component={OnboardingScreen}/>
//     //       <AppStack.Screen name="Home" component={HomeScreen}/>
//     //     </AppStack.Navigator>
//     //   </NavigationContainer>
//     // );
//   }else{
//     // return <HomeScreen />
//     return(
//       <NavigationContainer>
//         <AppStack.Navigator headerShown = "false">
//           <AppStack.Screen name="Aristotle" component={OnboardingScreen}/>
//           <AppStack.Screen name="Home" component={HomeScreen}/>
//           <AppStack.Screen name="ChatBot" component={ChatBot}/>
//           <AppStack.Screen name="CameraScreen" component={CameraScreen}/>
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   }

// }

// export default App;




// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React, { useEffect } from 'react';

// import CameraScreen from './components/CameraScreen';
// import ChatBot from './screens/ChatBot';
// import HomeScreen from "./screens/HomeScreen";


// const AppStack = createStackNavigator();

// const App = () => {
//   const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
//   const [isLoggedIn,setIsLoggedIn] = React.useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('AlreadyLaunched').then(value => {
//       if (value == null) {
//         AsyncStorage.setItem('AlreadyLaunched', 'true');
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     });
    
//     AsyncStorage.getItem('userToken').then(token => {
//       if (token) {
//         setIsLoggedIn(true);
//       }
//     });
//   }, []);

//   if(isFirstLaunch == null){
//     return null;
//   }else if(isFirstLaunch == true){
//     return <HomeScreen />
//   }
//   // else if (!isLoggedIn) {
//   //   return (
//   //     <NavigationContainer>
//   //       <AppStack.Navigator headerShown={false}>
//   //         <AppStack.Screen name="Login" component={Login} />
//   //         <AppStack.Screen name="Registration" component={Registration} />
//   //         <AppStack.Screen name="Aristotle" component={OnboardingScreen}/>
//   //       </AppStack.Navigator>
//   //     </NavigationContainer>
//   //   );
//   // }
//   else{
//     {/* return <HomeScreen /> */ }
//     return(
//       <NavigationContainer>
//         <AppStack.Navigator headerShown = {false}>
//           <AppStack.Screen name="Home" component={HomeScreen}/>
//           <AppStack.Screen name="CameraScreen" component={CameraScreen} />
//           <AppStack.Screen name="ChatBot" component={ChatBot}/>
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   }

// }

// export default App;



// return(
    //   <NavigationContainer>
    //     <AppStack.Navigator headerShown = "false">
    //       <AppStack.Screen name="Aristotle" component={OnboardingScreen}/>
    //       <AppStack.Screen name="Home" component={HomeScreen}/>
    //     </AppStack.Navigator>
    //   </NavigationContainer>
    // );





    // import AsyncStorage from '@react-native-async-storage/async-storage';
    // import { NavigationContainer } from '@react-navigation/native';
    // import { createStackNavigator } from '@react-navigation/stack';
    // import React, { useEffect } from 'react';
    
    // import CameraScreen from './components/CameraScreen';
    // import ChatBot from './screens/ChatBot';
    // import HomeScreen from "./screens/HomeScreen";
    // import Login from "./screens/Login";
    // import Registration from "./screens/Registration";
    // import OnboardingScreen from "./screens/OnboardingScreen";
    
    // const AppStack = createStackNavigator();
    
    // const App = () => {
    //   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    
    //   useEffect(() => {
    //     AsyncStorage.getItem('AlreadyLaunched').then(value => {
    //       if (value == null) {
    //         AsyncStorage.setItem('AlreadyLaunched', 'true');
    //         setIsFirstLaunch(true);
    //       } else {
    //         setIsFirstLaunch(false);
    //       }
    //     });
    //   }, []);
    
    //   if (isFirstLaunch === null) {
    //     return null;
    //   } else if (isFirstLaunch === true) {
    //     return <OnboardingScreen />;
    //   } else {
    //     return (
    //       <NavigationContainer>
    //         <AppStack.Navigator headerShown={false}>
    //           <AppStack.Screen name="LoginScreen" component={Login} />
    //           <AppStack.Screen name="Registration" component={Registration} />
    //           <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    //           <AppStack.Screen name="CameraScreen" component={CameraScreen} />
    //           <AppStack.Screen name="ChatBot" component={ChatBot} />
    //         </AppStack.Navigator>
    //       </NavigationContainer>
    //     );
    //   }
    // }
    
    // export default App;
    

//     import AsyncStorage from '@react-native-async-storage/async-storage';
//     import { NavigationContainer } from '@react-navigation/native';
//     import { createStackNavigator } from '@react-navigation/stack';
//     import React, { useEffect } from 'react';
    
//     import CameraScreen from './components/CameraScreen';
//     import ChatBot from './screens/ChatBot';
//     import HomeScreen from "./screens/HomeScreen";
//     import Login from "./screens/Login";
//     import Registration from "./screens/Registration";
//     import OnboardingScreen from "./screens/OnboardingScreen";
    
//     const AppStack = createStackNavigator();
    
//     const App = () => {
//       const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    
//       useEffect(() => {
//         AsyncStorage.getItem('AlreadyLaunched').then(value => {
//           if (value == null) {
//             AsyncStorage.setItem('AlreadyLaunched', 'true');
//             setIsFirstLaunch(true);
//           } else {
//             setIsFirstLaunch(false);
//           }
//         });
//       }, []);
    
//       if (isFirstLaunch === null) {
//         return null;
//       } else if (isFirstLaunch === true) {
//         return <OnboardingScreen />;
//       } else {
//         return (
//           <NavigationContainer>
//             <AppStack.Navigator headerShown={false}>
//               <AppStack.Screen name="Login" component={Login} />
//               <AppStack.Screen name="Registration" component={Registration} />
//               <AppStack.Screen name="HomeScreen" component={HomeScreen} />
//               <AppStack.Screen name="CameraScreen" component={CameraScreen} />
//               <AppStack.Screen name="ChatBot" component={ChatBot} />
//             </AppStack.Navigator>
//           </NavigationContainer>
//         );
//       }
//     }
    
//  export default App;



import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import CameraScreen from './components/CameraScreen';
import ChatBot from './screens/ChatBot';
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import OnboardingScreen from "./screens/OnboardingScreen";
import ImageEditingScreen from "./screens/ImageEditingScreen"; // Import ImageEditingScreen

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('AlreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('AlreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return <OnboardingScreen />;
  } else {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown={false}>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Registration" component={Registration} />
          <AppStack.Screen name="HomeScreen" component={HomeScreen} />
          <AppStack.Screen name="CameraScreen" component={CameraScreen} />
          <AppStack.Screen name="ChatBot" component={ChatBot} />
          <AppStack.Screen name="ImageGeneration" component={ImageEditingScreen} /> 
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

