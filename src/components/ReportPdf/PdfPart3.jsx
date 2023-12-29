import PropTypes from "prop-types";
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  heading: {
    fontSize: 10,
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: 2,
    marginTop: 6,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableCol: {
    width: '12.5%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    textAlign: 'center',
    fontSize: 8,
  },
  remarks: {
    fontWeight: 'bold',
    fontSize: 10,
    marginVertical: 10,
  },
});

const Part3 = ({
  BatteryData,
}) => {
  return (
  
        <View>
          <Text style={styles.heading}>BATTERY TEST REPORT</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>SL. NO</Text>
              <Text style={styles.tableCol}>BATTERY BATCH CODE</Text>
              <Text style={styles.tableCol}>WITH MAINS</Text>
              <Text style={styles.tableCol}>WITHOUT MAINS</Text>
              <Text style={styles.tableCol}>AFTER 5 MIN</Text>
              <Text style={styles.tableCol}>AFTER 10 MIN</Text>
              <Text style={styles.tableCol}>AFTER 20 MIN</Text>
              <Text style={styles.tableCol}>AFTER 40 MIN</Text>
              <Text style={styles.tableCol}>AFTER 1 HOUR</Text>
            </View>

            {BatteryData.map((battery, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{index + 1}</Text>
                <Text style={styles.tableCol}>{battery.BatteryBatchCode}</Text>
                <Text style={styles.tableCol}>{battery.WithMains}</Text>
                <Text style={styles.tableCol}>{battery.WithoutMains}</Text>
                <Text style={styles.tableCol}>{battery.After5mins}</Text>
                <Text style={styles.tableCol}>{battery.After10mins}</Text>
                <Text style={styles.tableCol}>{battery.After20mins}</Text>
                <Text style={styles.tableCol}>{battery.After40mins}</Text>
                <Text style={styles.tableCol}>{battery.After1hrs}</Text>
              </View>
            ))}
          </View>
        </View>
  );
};
Part3.propTypes ={
  BatteryData: PropTypes.array.isRequired,
  CustomerRemarks: PropTypes.string.isRequired
}
export default Part3;

  