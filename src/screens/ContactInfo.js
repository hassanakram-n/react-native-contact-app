import React from 'react';
import {StyleSheet, FlatList, View, Text, Pressable} from 'react-native';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import { deleteContact } from '../redux/action';

const ContactInfo = ({route, navigation,  deleteContact}) => {
  const contactDetails = route.params;
  const btns = [
    {
        id: 'deleteBtn',
        title: 'Delete Contact',
        onpress: () => {deleteContact(contactDetails.id); navigation.navigate('Home')},
    },
    {
        id: 'editBtn',
        title: 'Edit Contact',
        onpress: () => navigation.navigate('EditContact', contactDetails),
    },
  ];
  return (
    <>
      <Header title="Details" showAddBtn='none' />
      <View style={styles.contactInfoScreen}>
        <EvilIcons name="user" size={150} color="#000" />
        <Text style={styles.contactNameText}>{contactDetails.name}</Text>
        <Text style={styles.contactNumberText}>{contactDetails.number}</Text>
      </View>
      <View style={styles.contactInfoScreen_buttonSection}>
        <FlatList
          data={btns}
          renderItem={({item}) => (
            <Pressable style={styles.btn} onPress={item.onpress}>
              <Text style={styles.btnText}>{item.title}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  deleteContact : (data) => dispatch(deleteContact(data)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
const styles = StyleSheet.create({
  contactInfoScreen: {
    // flex: 1,
    alignItems: 'center',
    // padding: 20,
    paddingTop: 100,
  },
  contactInfoScreen_buttonSection: {
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
