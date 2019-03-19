import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Icon } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Coffee List",
      headerLeft: null,
      headerRight: (
        <Icon
          name="shopping-cart"
          type="FontAwesome"
          onPress={() => navigation.navigate("Cart")}
        />
      )
    };
  };

  render() {
    const coffeeshops = coffeeStore.coffeeshops;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem
          coffeeShop={coffeeShop}
          key={coffeeShop.id}
          navigation={this.props.navigation}
        />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
