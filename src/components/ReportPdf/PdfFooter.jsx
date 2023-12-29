import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 2,
    fontWeight: 'bold',
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  section: {
    width: '100%',
    padding: 8,
    borderColor: 'black',
    boxSizing: 'border-box',
  },
  halfSection: {
    width: '50%',
  },
  mb12: {
    marginBottom: 12,
  },
 
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  pl4: {
    paddingLeft: 14,
  },
  remarks:{
    textAlign:'center',
    marginVertical:4,
  }

 
});

const Footer = ({
  customer_sign
}) => {
  return (
 <View>
        <View style={styles.container}>
          <View style={styles.flexContainer}>
            <View style={[styles.section, styles.halfSection]}>
              <View style={styles.mb12}>
              <Text>Customer`s Signature & Stamp:</Text>
              <Image source={customer_sign}/>
              </View>
              <View style={styles.flexRow}>
                <Text>Date:</Text>
                <Text style={styles.pl4}>Time:</Text>
              </View>
            </View>
            <View style={[styles.section, styles.halfSection]}>
              <View style={styles.mb12}>
                <Text>Service Engineer`s Name:</Text>
                <Text>Signature:</Text>
              </View>
              
            </View>
          </View>
        </View>
        <View style={styles.remarks}>
           <Text >
           This Report is System Generated
          </Text>
        </View>
        </View>
  );
};
Footer.propTypes={
  customer_sign : PropTypes.string.isRequired
}
export default Footer;
