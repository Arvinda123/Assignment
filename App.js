import { FlatList,StyleSheet,Text,TextInput,View} from "react-native";
import React,{useState,useEffect} from "react";
import { Formik } from "formik";
import{Dropdown} from 'react-native-material-dropdown';
const App = () =>{
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [checked, setChecked] = useState('first');
  [
    {
      "id": 1,
      "name": "Business",
    },
    {
      "id": 2,
      "name": "Jobholder",
    },
    {
      "id": 3,
      "name": "Others",
    }
  ]
return(
  <View style={styles.container}>
          <Text style={styles.text}>
            Let's start by providing <Text style={styles.coloredText}>your personal</Text>{'\n'}
            Details
          </Text>
          <View style={styles.rectangle}>
            <Text style={styles.boldText}>Name on your PRAN Card <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <View style={styles.rectangle}>
                         <Text style={styles.label}>Select an option</Text>
                    return(label='Business')
            </View>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Income Range <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Educational Qualification<Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Father's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Mother's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <Text style={styles.text}>
            What do you want to print on the card? <Text style={styles.coloredText}></Text>{'\n'}
            </Text>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Material Status <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Spouse's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            </View>
);
}
 const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#E6F3FF',
      marginTop: 20,
  },
  asterisk:{
    color:'red',
  },
  text: {
    fontSize: 18,
    color: '#74739E',
    fontWeight: 'bold',
    marginTop: 10
},
coloredText: {
    color: 'red',
    color: '#0F0F5C',
    fontWeight: 'bold',
},
boldText: {
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5,
},
rectangle: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:2,
    marginTop:10,
    borderRadius:5,
}
,
  items:{
    color:'black',
  }
});
export default App;
  { <Formik initialValues={
    {
      name: '',
      Occupation: '',
      IncomeRange :'',
      EducationalQualification :'' ,
      FathersName :'',
      Mothersname :'',
    }
    }>
       {({values,errors,touched,handleSubmit}) =>  }
    {<View style={styles.wrapper}>
    <StatusBar barStyle={'light-content'}/>
    <View style={styles.formContainer}>
      <Text style ={styles.title}>Personal Details</Text>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Name on Your PRAN Card"/>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Occupation"/>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Income Range"/>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Educational Qualification"/>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Father's Name"/>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput style={styles.inputStyle} placeholder="Mother's Name"/>
      </View>
    </View>
  </View>
  }
  </Formik> }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import React from 'react';
// import type { Node } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
// export default App;