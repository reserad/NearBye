/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['nearbye://'],
  // config: {
  //   screens: {
  //     MagicLinkVerify: {
  //       path: "verify/:response",
  //       parse: {
  //         response: (response) => response
  //       }
  //     }
  //   }
  // }
};

export default linking;
