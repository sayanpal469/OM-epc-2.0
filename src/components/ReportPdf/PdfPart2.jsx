import PropTypes from "prop-types";
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    borderWidth: 1,
    borderColor: 'black',
    fontSize:8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 4,
    marginBottom: 2,
  },
  column: {
    width: '50%',
  },
  subHeader: {
    marginBottom: 5,
  },
  flexGap: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 2,
  },
});

const Part2 = ({
  AcInputThreePhase_RY,
  AcInputThreePhase_YB,
  AcInputThreePhase_RB,
  AcInputThreePhase_NR,
  AcOutputThreePhase_RY,
  AcOutputThreePhase_YB,
  AcOutputThreePhase_RB,
  AcOutputThreePhase_NR,
  AcInputSinglePhase_LN,
  AcInputSinglePhase_NE,
  AcInputSinglePhase_LE,
  AcOutputSinglePhase_LN,
  AcOutputSinglePhase_NE,
  AcOutputSinglePhase_LE,
  UpsInvertDCV,
  DCV_WithMains,
  DCV_WithoutMains,
  power_cut,
  battery_make,
  battery_type,
  battery_AH,
  quantity,
}) => {
  return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.subHeader}>
                <Text>AC/INPUT(THREE PHASE)</Text>
              </View>
              <View style={styles.flexGap}>
                <Text>R-B: {AcInputThreePhase_RB}</Text>
                <Text>Y-B: {AcInputThreePhase_YB}</Text>
                <Text>R-Y: {AcInputThreePhase_RY}</Text>
                <Text>N-R: {AcInputThreePhase_NR}</Text>
              </View>
              <View style={styles.subHeader}>
                <Text>AC/INPUT(ONE PHASE)</Text>
              </View>
              <View style={styles.flexGap}>
                <Text>L-N: {AcInputSinglePhase_LN}</Text>
                <Text>N-E: {AcInputSinglePhase_NE}</Text>
                <Text>L-E: {AcInputSinglePhase_LE}</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.subHeader}>
                <Text>AC/INPUT(THREE PHASE)</Text>
              </View>
              <View style={styles.flexGap}>
                <Text>R-B: {AcOutputThreePhase_RB}</Text>
                <Text>Y-B: {AcOutputThreePhase_YB}</Text>
                <Text>R-Y: {AcOutputThreePhase_RY}</Text>
                <Text>N-R: {AcOutputThreePhase_NR}</Text>
              </View>
              <View style={styles.subHeader}>
                <Text>AC/INPUT(ONE PHASE)</Text>
              </View>
              <View style={styles.flexGap}>
                <Text>L-N: {AcOutputSinglePhase_LN}</Text>
                <Text>N-E: {AcOutputSinglePhase_NE}</Text>
                <Text>L-E: {AcOutputSinglePhase_LE}</Text>
              </View>
            </View>
          </View>
          <View >
            <View>
              <View style={styles.flexGap}>
                <Text>UPS/INVERTER DC.V: {UpsInvertDCV}</Text>
                <Text>DC.V(WITH MAILS): {DCV_WithMains}</Text>
                <Text>DC.V(WITH OUT MAINS): {DCV_WithoutMains}</Text>
                <Text>POWER CUT: {power_cut}</Text>
              </View>
              <View style={styles.flexGap}>
                <Text>BATTERY MAKE: {battery_make}</Text>
                <Text>BATTERY TYPE: {battery_type}</Text>
                <Text>BATTERY A.H: {battery_AH}</Text>
                <Text>QUANTITY: {quantity}</Text>
              </View>
            </View>
          </View>
        </View>
  );
};
Part2.propTypes= {
  AcInputThreePhase_RY: PropTypes.string.isRequired,
  AcInputThreePhase_YB: PropTypes.string.isRequired,
  AcInputThreePhase_RB: PropTypes.string.isRequired,
  AcInputThreePhase_NR: PropTypes.string.isRequired,
  AcOutputThreePhase_RY: PropTypes.string.isRequired,
  AcOutputThreePhase_YB: PropTypes.string.isRequired,
  AcOutputThreePhase_RB: PropTypes.string.isRequired,
  AcOutputThreePhase_NR: PropTypes.string.isRequired,
  AcInputSinglePhase_LN: PropTypes.string.isRequired,
  AcInputSinglePhase_NE: PropTypes.string.isRequired,
  AcInputSinglePhase_LE: PropTypes.string.isRequired,
  AcOutputSinglePhase_LN: PropTypes.string.isRequired,
  AcOutputSinglePhase_NE: PropTypes.string.isRequired,
  AcOutputSinglePhase_LE: PropTypes.string.isRequired,
  UpsInvertDCV: PropTypes.string.isRequired,
  DCV_WithMains: PropTypes.string.isRequired,
  DCV_WithoutMains: PropTypes.string.isRequired,
  power_cut: PropTypes.string.isRequired,
  battery_make: PropTypes.string.isRequired,
  battery_type: PropTypes.string.isRequired,
  battery_AH: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
}
export default Part2;
