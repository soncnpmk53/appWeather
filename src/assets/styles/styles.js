import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: 300,
  },
  loginTitle: {
    color: '#577f67',
    fontSize: 20,
    lineHeight: 27,
  },
  groupContainer: {
    marginVertical: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#7e7e7e',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 4,
  },
  starLabel: {
    color: 'red',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFF',
    color: 'black',
    borderBottomWidth: 0.5,
    borderBottomColor: '#7e7e7e',
    padding: 8,
  },
  button: {
    borderRadius: 12,
    height: 48,
    backgroundColor: '#577f67',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_profile: {
    borderRadius: 12,
    marginLeft: 50,
    height: 48,
    width: 120,
    backgroundColor: '#577f67',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createAccountText: {
    color: 'black',
  },
  createAccountLink: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backIcon: {
    margin: 16,
  },
  companyLogo: {
    alignSelf: 'center',
    width: 84,
    height: 84,
    marginBottom:20
  },
  socialIcon: {
    width: 40,
    height: 40,
    margin: 8,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  appBar: {
    color: 'black',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    tintColor: 'black',
    margin: 8,
  },
  floatActionBar: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  contentWrapper: {
    marginLeft: 16,
  },
  text: {
    color: 'black',
  },
  categoryContainer: {
    paddingVertical: 8,
  },
  category: {
    backgroundColor: '#080f2d',
    justifyContent: 'center',
    height: 80,
    padding: 8,
    width: 180,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#080f2d',
    borderRadius: 16,
    padding: 8,
    marginVertical: 8,
  },
  todoIcon: {
    width: 24,
    height: 24,
    tintColor: '#181f1d',
    margin: 8,
  },
  todoList: {
    marginRight: 16,
  },
});
