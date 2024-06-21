import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: TestIds.BANNER, //'ca-app-pub-3339897183017333/7058149180',
      Interstitial: TestIds.INTERSTITIAL, //'ca-app-pub-3339897183017333/5581415980',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/2627949580',
      Interstitial: 'ca-app-pub-3339897183017333/6431155754',
    },
  }),
};
