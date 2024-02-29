import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const About = ({navigation}) => {
  const testingSchema = () => {
    return yup.object().shape({
      name: yup
        .string()
        .required('name is required')
        .min(3, 'name must be at least 3 characters')
        .max(25, 'name must not exceed 25 characters'),
    });
  };

  const sumitForm = data => {
    console.log('data======>>>>>', data);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
    reset,
    clearErrors,
    setFocus,
    register,
    trigger,
  } = useForm({
    resolver: yupResolver(testingSchema()),
  });

  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="name"
          render={({field: {onChange, value}}) => {
            return (
              <>
                <TextInput
                  value={value}
                  style={{borderWidth: 1, width: '100%', borderRadius: 10}}
                  placeholder="name"
                  onChangeText={onChange}
                />
                {errors?.name?.message && <Text>{errors?.name?.message}</Text>}
              </>
            );
          }}
        />

        <TouchableOpacity onPress={handleSubmit(sumitForm)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;
