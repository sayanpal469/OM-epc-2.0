import PropTypes from "prop-types";
import tick from "../../assets/tick.png";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const Part1 = ({
  client_name,
  customer_name,
  complain_id,
  customer_contact,
  atm_id,
  date,
  product_make,
  product_slNo,
  buy_back_details,
  nature_of_complaint,
  site_type,
  work_type,
  device_type,
  address,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.infoText}>Complain ID: {complain_id} </Text>
          <Text style={styles.infoText}>Date: {date} </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
      <View style={styles.textBorder}>
        <Text style={styles.text}>Customer Name: {customer_name} </Text>
        </View>
        <View style={styles.textBorder}>
        <Text style={styles.text}>Client Name: {client_name}</Text>
        </View>
        <View style={styles.textBorder}>
        <Text style={styles.text}>Site Id/ATM Id: {atm_id} </Text>
        </View>
        <View style={styles.textBorder}>
        <Text style={styles.text}>P.H No: {customer_contact} </Text>
        </View>
        <View style={styles.textBorder}>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>Onsite:</Text>
          {site_type === "Onsite" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>Offsite:</Text>
          {site_type === "Offsite" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
      <View style={styles.textBorder}>
        <Text style={styles.text}>Address: {address}</Text>
        </View>
      </View>

      <View style={styles.flexRow2}>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>WARRANTY:</Text>
          {work_type === "Warrenty" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>AMC:</Text>
          {work_type === "AMC" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>INSTALLATION:</Text>
          {work_type === "Installation" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>SITE INSPECTION:</Text>
          {work_type === "SiteInspection" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>CHARGEBALE:</Text>
          {work_type === "Chargeable" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>PM:</Text>
          {work_type === "PM" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>SERVICE:</Text>
          {work_type === "Service" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
      </View>

      <View style={styles.flexRow2}>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>UPS & BATTERY:</Text>
          {device_type === "Ups_Battery" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>INVERTER & BATTERY:</Text>
          {device_type === "Inverter_Battery" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>STABILIZER:</Text>
          {device_type === "Stabilizer" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>SOLAR:</Text>
          {device_type === "Solar" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>COMPUTER:</Text>
          {device_type === "Computer" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>PRINTER:</Text>
          {device_type === "Printer" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
        <View style={styles.checkboxLabel}>
          <Text style={styles.labelText}>CCTV:</Text>
          {device_type === "CCTV" ? (
            <Image source={tick} style={styles.checkbox} />
          ) : (
            <View style={styles.checkbox}></View>
          )}
        </View>
      </View>

      <View style={styles.textContainer}>
      <View style={styles.productContainer}>
        <Text style={styles.productMakeText}>PRODUCT MAKE: {product_make}</Text>
        <Text style={styles.text}>PRODUCT SL NO: {product_slNo}</Text>
        </View>
        <View style={styles.textBorder}>
        <Text style={styles.text}>BUY BACK DETAILS: {buy_back_details}</Text>
        </View>
        <View style={styles.textBorder}>
        <Text style={styles.text}>
          NATURE OF COMPLAINT: {nature_of_complaint}
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
  infoContainer: {
    paddingBottom: 2,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 5,
    marginBottom: 4,
    marginTop: 4,
  },
  flexRow2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingTop: 4,
    paddingLeft: 2,
    paddingRight: 2,
    marginBottom: 2,
  },
  infoText: {
    marginBottom: 0, // Adjust based on styling
    fontSize: 8,
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 10,
    marginBottom: 4,
    marginTop: 4,
  },
  text: {
    marginBottom: 2,
    fontSize: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 1,
  },
  checkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkboxLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  labelText: {
    fontSize: 8, // Updated font size
    marginRight: 4,
  },
  checkbox: {
    width: 12,
    height: 10,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 1,
    marginRight: 2,
    marginBottom: 4,
  },
  productContainer:{
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingTop: 4,
    paddingLeft: 2,
    paddingRight: 2,
    marginBottom: 2,
  },
  productMakeText:{
    marginRight:4,
    marginBottom: 2,
    fontSize: 8,
  },
  textBorder:{
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingTop: 4,
    paddingLeft: 2,
    paddingRight: 2,
    marginBottom: 2,
    width: 'auto',
  }
});

Part1.propTypes = {
  client_name: PropTypes.string.isRequired,
  atm_id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  product_make: PropTypes.string.isRequired,
  product_slNo: PropTypes.string.isRequired,
  buy_back_details: PropTypes.string.isRequired,
  nature_of_complaint: PropTypes.string.isRequired,
  site_type: PropTypes.string.isRequired,
  work_type: PropTypes.string.isRequired,
  device_type: PropTypes.string.isRequired,
  complain_id: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  customer_contact: PropTypes.string,
};
export default Part1;
