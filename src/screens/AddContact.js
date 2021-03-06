import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Text, Pressable} from 'react-native';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputField from '../components/InputsField';
import FormButton from '../components/FormButton';
import {connect} from 'react-redux';
import {addContactData} from '../redux/action'

const AddContact = ({navigation, contactList, addContactData}) => {
  const [name, setname] = useState(null);
  const [number, setnumber] = useState(null);
  return (
    <>
      <Header title="Add Contact" showEditBtn="none" showAddBtn="none" />
      <View style={styles.AddContactScreen}>
        <EvilIcons name="user" size={150} color="#000" />
      </View>
      <View style={styles.AddContactScreen_buttonSection}>
        <InputField
          onChangeText={(e) => setname(e)}
          labelValue={name}
          placeholderText="Contact Name"
          iconType="user"
        />
        {/*  */}
        <InputField
          onChangeText={(e) => setnumber(e)}
          labelValue={number}
          placeholderText="Contact number"
          iconType="mobile1"
        />
        <FormButton
          // isLoading={disable}
          // iconType="edit"
          buttonTitle="Create New Contact"
          onPress={() => 
            {addContactData({
              id: number,
              name: name,
              number: number,
            })
            navigation.navigate('Home')
            }}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addContactData : (data) => dispatch(addContactData(data)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(AddContact);


const styles = StyleSheet.create({
  AddContactScreen: {
    // flex: 1,
    alignItems: 'center',
    // padding: 20,
    paddingTop: 100,
  },
  AddContactScreen_buttonSection: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    // paddingTop: 100,
  },
  contactNameText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  contactNumberText: {
    fontSize: 20,
    //   fontWeight: 'bold',
  },
  btn: {
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    paddingVertical: 6,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
