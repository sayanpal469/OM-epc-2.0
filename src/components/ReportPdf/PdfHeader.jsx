import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import pdf_logo from '../../assets/pdf_logo.png'
import customer_care from'../../assets/customer_care.png'
import whatsapp_ from'../../assets/whatsapp_.png'
import mail from'../../assets/mail.png'
import gmail from'../../assets/gmail.png'
const Header = () => {
  return (
   
        <View style={styles.container}>
          <View style={styles.logoContainer}>
           <Image style={styles.logo} source={pdf_logo}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>SERVICE FIELD REPORT</Text>
            <Text style={styles.companyName}>OM EPC SOLUTION</Text>
            <Text style={styles.address}>
              10/8/1, Amritalal Pyne lane, Shibpur, Howrah, West Bengal, 711101
            </Text>
          </View>
          <View style={styles.contactDetails}>
            <View style={styles.contactHeader}>
              <Text style={styles.contactHeaderText}>CONTACT DETAILS</Text>
            </View>
            <View style={styles.contactInfo}>
              <View style={styles.contactAlign}>
              <Image style={styles.small_Logo} source={customer_care}/>
              <Text style={styles.contactText}>7981413743</Text>
              </View>
              <View style={styles.contactAlign}>
                <Image style={styles.small_Logo} source={whatsapp_}/>
              <Text style={styles.contactText}>9477654043</Text>
              </View>
              <View style={styles.contactAlign}>
                <Image style={styles.small_Logo} source={gmail}/>
              <Text style={styles.contactText}>omepcsolution@gmail.com</Text>
              </View>
              <View style={styles.contactAlign}>
                <Image style={styles.small_Logo} source={mail}/>
              <Text style={styles.contactText}>service.omepcsolution@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 8,
    paddingHorizontal: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginRight: 6,
  },
  logo: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 35,
  },
  small_Logo: {
    width: 10,
    height: 10,
 
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  companyName: {
    fontWeight: 'semibold',
    fontSize: 10,
    marginBottom: 5,
  },
  address: {
    fontWeight: '600',
    fontSize: 8,
    textAlign: 'center',
  },
  contactDetails: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 2,
    textAlign: 'center',
    text:6
  },
  contactHeader: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 2,
  },
  contactHeaderText: {
    fontSize: 10,
  },
  contactInfo: {
    padding: 2,
  },
  contactText: {
    fontSize: 8, // Change the font size as per your requirement
    paddingLeft:4
  },
  contactAlign:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Header;
