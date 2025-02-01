import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Reject from '../../assets/Reject.svg';
import Accepts from '../../assets/Accept.svg';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSellerAccepted, setIsSellerAccepted] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
          <Text style={styles.headerText}>Company Name</Text>
          <View style={{ flexDirection: 'row', gap : 10 }}>
            <Reject width={24} height={24} onPress={() => {
                setIsSellerAccepted(false)
                alert('Seller Rejected')
            }}/> 
             <Accepts width={24} height={24} onPress={() => {
                setIsSellerAccepted(true)
                alert('Seller Accepted')
             }}/>
          </View>
        </TouchableOpacity>
        {
                isSellerAccepted ? <Text style={{color: 'white', textAlign : 'center', backgroundColor : 'green'}}>Seller Accepted</Text> : <Text style={{color: 'white', textAlign : 'center', backgroundColor : 'red',}}>Seller Rejected</Text>
            }
        {isExpanded && (
          <View style={styles.content}>
            {Object.entries(data).map(([key, value]) => {
              // Show certificates conditionally based on `seller_type`
              if (
                (key === 'dealer_cert_url' && data.seller_type !== 'dealer') ||
                (key === 'distributor_cert_url' && data.seller_type !== 'distributor')
              ) {
                return null;
              }

              return (
                <ScrollView key={key} style={styles.fieldContainer}>
                  <Text style={styles.fieldKey}>{formatKey(key)}</Text>
                  <Text style={styles.fieldValue}>{value}</Text>
                </ScrollView>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const formatKey = (key) => {
  return key
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letters
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  section: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  fieldContainer: {
    marginBottom: 12,
  },
  fieldKey: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  fieldValue: {
    fontSize: 14,
    color: '#777',
  },
});

export default Accordion;
