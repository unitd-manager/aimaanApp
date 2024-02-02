import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EHeader from '../../../components/common/EHeader';
import EInput from '../../../components/common/EInput';
import { styles } from '../../../themes';
import { Dropdown } from 'react-native-element-dropdown';
import { allRecords, HighestQualification } from '../../../api/constant';
import { getHeight, moderateScale } from '../../../common/constants';
import EButton from '../../../components/common/EButton';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import api from '../../../api/api';

const Membership = ({ route }) => {

    const navigation = useNavigation();
    const colors = useSelector(state => state.theme.theme);

    const BlurredStyle = {
        backgroundColor: colors.inputBg,
        borderColor: colors.primary5,
    };
    const FocusedStyle = {
        backgroundColor: colors.inputBg,
        borderColor: colors.primary5,
        color: colors.textColor
    };

    const [nameInputStyle, setNameInputStyle] = useState(BlurredStyle);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('');
    const [job, setJob] = useState('');
    const [birth, setBirth] = useState('');
    const [years, setYears] = useState('');
    const [highestQualification, setHighestQualification] = useState('');

    const onChangedName = text => setName(text);
    const onChangedMobile = text => setMobile(text);
    const onChangedLocation = text => setLocation(text);
    const onChangedCountry = text => setCountry(text);
    const onChangedJob = text => setJob(text);
    const onChangedBirth = text => setBirth(text.value);
    const onChangedYears = text => setYears(text.value);
    const onChangedHighestQualification = text => setHighestQualification(text.value);

    const onFocusInput = onHighlight => onHighlight(FocusedStyle);
    const onBlurInput = onHighlight => onHighlight(FocusedStyle);

    const onFocusname = () => onFocusInput(setNameInputStyle);
    const onBlurname = () => onBlurInput(setNameInputStyle);

    const onPressSubmit = () => {

        const formData = {
            name,
            mobile,
            birth_year: birth,
            address: location,
            address1: country,
            qualification: highestQualification,
            position: job,
            from_year: years,
            flag: '1',
            creation_date: moment().format('DD-MMM-YYYY')
        };

        if (!name || !mobile || !birth || !location || !country || !country || !job || !years) {
            Alert.alert('Please fill in all required fields.');
            return;
        }

        api
            .post('/contact/insertContact', formData)
            .then(() => {
                Alert.alert('Request sent successfully.');
                setName('')
                setMobile('')
                setLocation('')
                setCountry('')
                setJob('')
                setBirth('')
                setYears('')
                setHighestQualification('')
            })
            .catch(error => {
                console.log('Error: ', error);
                Alert.alert('Network connection error.');
            });
    };

    return (
        <>

            <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
                <EHeader title={route.params.title} onPress={() => navigation.pop()} />
                <ScrollView
                    contentContainerStyle={localStyles.scrollViewContainer}
                >
                    <View
                        style={localStyles.contentContainerStyle}
                    >

                        <EInput
                            placeHolder={'Name'}
                            _value={name}
                            style={{ color: colors.placeHolderColor }}
                            autoCapitalize={'none'}
                            onChangeText={onChangedName}
                            inputContainerStyle={[
                                { backgroundColor: colors.inputBg },
                                localStyles.inputContainerStyle,
                                nameInputStyle,
                            ]}
                            _onFocus={onFocusname}
                            onBlur={onBlurname}
                        />

                        <EInput
                            placeHolder={'UAE Mobile number'}
                            _value={mobile}
                            style={{ color: colors.placeHolderColor }}
                            autoCapitalize={'none'}
                            onChangeText={onChangedMobile}
                            inputContainerStyle={[
                                { backgroundColor: colors.inputBg },
                                localStyles.inputContainerStyle,
                                nameInputStyle,
                            ]}
                            _onFocus={onFocusname}
                            onBlur={onBlurname}
                        />

                        <Dropdown
                            style={[
                                localStyles.dropdownStyle,
                                {
                                    backgroundColor: colors.inputBg,
                                    borderColor: colors.primary5,
                                    color: colors.white,
                                },
                            ]}
                            placeholderStyle={{ color: colors.grayScale5 }}
                            data={allRecords}
                            maxHeight={moderateScale(180)}
                            labelField="label"
                            valueField="value"
                            placeholder="Year of Birth"
                            value={birth}
                            itemTextStyle={{
                                color: colors.textColor,
                                fontSize: moderateScale(16),
                            }}
                            onChange={onChangedBirth}
                            selectedTextStyle={{
                                color: colors.textColor,
                            }}
                            itemContainerStyle={{
                                backgroundColor: colors.inputBg,
                            }}
                            activeColor={colors.inputBg}
                        />

                        <EInput
                            placeHolder={'Location in UAE'}
                            _value={location}
                            style={{ color: colors.placeHolderColor }}
                            autoCapitalize={'none'}
                            onChangeText={onChangedLocation}
                            inputContainerStyle={[
                                { backgroundColor: colors.inputBg },
                                localStyles.inputContainerStyle,
                                nameInputStyle,
                            ]}
                            _onFocus={onFocusname}
                            onBlur={onBlurname}
                        />

                        <EInput
                            placeHolder={'Native place details (Home country)'}
                            _value={country}
                            style={{ color: colors.placeHolderColor }}
                            autoCapitalize={'none'}
                            onChangeText={onChangedCountry}
                            inputContainerStyle={[
                                { backgroundColor: colors.inputBg },
                                localStyles.inputContainerStyle,
                                nameInputStyle,
                            ]}
                            _onFocus={onFocusname}
                            onBlur={onBlurname}
                        />

                        <Dropdown
                            style={[
                                localStyles.dropdownStyle,
                                {
                                    backgroundColor: colors.inputBg,
                                    borderColor: colors.primary5,
                                    color: colors.white,
                                },
                            ]}
                            placeholderStyle={{ color: colors.grayScale5 }}
                            data={HighestQualification}
                            maxHeight={moderateScale(180)}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Highest Qualification"
                            value={highestQualification}
                            itemTextStyle={{
                                color: colors.textColor,
                                fontSize: moderateScale(16),
                            }}
                            onChange={onChangedHighestQualification}
                            selectedTextStyle={{
                                color: colors.textColor,
                            }}
                            itemContainerStyle={{
                                backgroundColor: colors.inputBg,
                            }}
                            activeColor={colors.inputBg}
                        />

                        <EInput
                            placeHolder={'Present Profession/Job'}
                            _value={job}
                            style={{ color: colors.placeHolderColor }}
                            autoCapitalize={'none'}
                            onChangeText={onChangedJob}
                            inputContainerStyle={[
                                { backgroundColor: colors.inputBg },
                                localStyles.inputContainerStyle,
                                nameInputStyle,
                            ]}
                            _onFocus={onFocusname}
                            onBlur={onBlurname}
                        />


                        <Dropdown
                            style={[
                                localStyles.dropdownStyle,
                                {
                                    backgroundColor: colors.inputBg,
                                    borderColor: colors.primary5,
                                    color: colors.white,
                                },
                            ]}
                            placeholderStyle={{ color: colors.grayScale5 }}
                            data={allRecords}
                            maxHeight={moderateScale(180)}
                            labelField="label"
                            valueField="value"
                            placeholder="Since when you are in UAE (year)"
                            value={years}
                            itemTextStyle={{
                                color: colors.textColor,
                                fontSize: moderateScale(16),
                            }}
                            onChange={onChangedYears}
                            selectedTextStyle={{
                                color: colors.textColor,
                            }}
                            itemContainerStyle={{
                                backgroundColor: colors.inputBg,
                            }}
                            activeColor={colors.inputBg}
                        />
                    </View>
                </ScrollView>
                <EButton
                    type={'S16'}
                    title={'Submit'}
                    color={colors.white}
                    onPress={onPressSubmit}
                    containerStyle={localStyles.continueBtnStyle}
                />
            </View>

        </>
    )
}

const localStyles = StyleSheet.create({
    contentContainerStyle: {
        ...styles.ph25,
        ...styles.pv20,
    },
    dropdownStyle: {
        height: getHeight(60),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        ...styles.ph25,
        ...styles.mv15,
    },
    continueBtnStyle: {
        ...styles.mb10,
        ...styles.mh15,
    },
    inputContainerStyle: {
        height: getHeight(60),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        ...styles.ph15,
    },
});

export default Membership;