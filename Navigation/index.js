import { createStackNavigator, createAppContainer } from "react-navigation";

import ListScreen from "../Components/CoffeeList";
import DetailScreen from "../Components/CoffeeDetail";
import LoginScreen from "../Components/Login";
import CartScreen from "../Components/CoffeeCart";

const OurStack = createStackNavigator(
  {
    List: ListScreen,
    Detail: DetailScreen,
    Login: LoginScreen,
    Cart: CartScreen
  },

  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const MyContainer = createAppContainer(OurStack);

export default MyContainer;

// export default createAppContainer(ourStack);
