import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  VirtualizedList,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import PureComp from './src/pureComp';
import NormalComp from './src/normalComp';
import React, { Component } from 'react';

const DATA = [
  {
    id: 1,
    title: 'Item 1',
  },
  {
    id: 2,
    title: 'Item 2',
  },
  {
    id: 3,
    title: 'Item 3',
  },
  {
    id: 4,
    title: 'Item 4',
  },
  {
    id: 5,
    title: 'Item 5',
  },
  {
    id: 6,
    title: 'Item 6',
  },
];

const getItem = (data, index) => {
  return data[index];
};

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const Separator = () => <View style={styles.divider} />;

const EmptyList = () => <Text style={styles.title}>No Items :(</Text>;

const loadMoreItems = () => {
  DATA.push({
    title: `New Item  ${DATA.length}`,
    id: DATA.length,
  });
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      person: { name: 'Jay', age: 22 },
      showWarning: false,
    };
  }

  onUpdateNamePress = () => {
    var person = this.state.person;
    person.name = this.state.textInputValue;
    this.setState({ person: person });
  };

  onUpdateAgePress = () => {
    var person = this.state.person;
    if (person.age.length > 0) {
      person.age = person.age + 1;
      this.setState({ person: person });
    } else {
      this.setState({ showWarning: !this.state.showWarning });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <Modal
          visible={this.state.showWarning}
          transparent
          animationType='fade'
          onRequestClose={() => {
            this.setState({ showWarning: !this.state.showWarning })
          }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.setState({ showWarning: false }) }} >

            <View style={styles.modal_container}>
              <TouchableOpacity activeOpacity={1}>
                <View style={styles.modal_warning}>
                  <View style={styles.warning_title}><Text>Warning!</Text></View>
                  <View style={styles.warning_body}>
                    <Text>Age Can Not Be Empty</Text>
                  </View>
                  <Pressable onPress={() => {
                    this.setState({
                      showWarning: !this.state.showWarning,
                    })
                  }} style={styles.warning_button}>
                    <Text style={styles.text}>Ok</Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        <TextInput
          value={this.state.textInputValue}
          style={{ width: 200, borderBottomWidth: 1, paddingBottom: 10 }}
          autoFocus={true}
          onChangeText={value => this.setState({ textInputValue: value })}
        />
        <View style={{ margin: 20 }}>
          <Button title="Update Name" onPress={this.onUpdateNamePress} />
        </View>
        <Button title="Update Age" onPress={this.onUpdateAgePress} />
        <View style={{ paddingTop: 50 }} />
        <PureComp text={this.state.textInputValue} person={this.state.person} />
        <View style={{ paddingTop: 20 }} />
        <NormalComp
          text={this.state.textInputValue}
          person={this.state.person}
        />
        <View style={{ paddingTop: 20 }} />
        {/* <View style={styles.container} /> */}
        {/* <VirtualizedList
          style={styles.list}
          data={DATA}
          ListEmptyComponent={EmptyList}
          ItemSeparatorComponent={Separator}
          renderItem={Item}
          onEndReached={loadMoreItems}
          keyExtractor={((item) => item.id)}
          getItemCount={(data) => data.length}
          getItem={getItem}
        /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  container: {
    width: 100,
    height: 100,
    // shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignSelf: 'stretch',
  },
  item: {
    height: 200,
    alignSelf: 'stretch',
    padding: 16,
    margin: 16,
    backgroundColor: '#aa0022',
  },
  title: {
    fontSize: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
  },
  modal_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000097',
    flex: 1
  },
  modal_warning: {
    height: 300,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#fff'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FF600A",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: '#00FFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  divider: {
    height: 8,
    backgroundColor: 'black',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});
