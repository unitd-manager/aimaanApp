import images from '../assets/images';
import {LocationLight} from '../assets/svgs';
import {
  CalenderBg,
  LocationDark,
  ProfileBg,
  TicketBg,
  WalletBg,
} from '../assets/svgs';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const ProfileSetting = [
  {
    id: 1,
    title: strings.manageEvents,
    icon: 'chatbubble-ellipses-outline',
  },
  {
    id: 2,
    title: strings.messageCenter,
    icon: 'calendar-outline',
    route: StackNav.CustomerService,
    isDivider: true,
  },
  {
    id: 3,
    title: strings.profile,
    icon: 'person-outline',
    route: StackNav.SetUpProfile,
    header: strings.editProfile,
  },
  {
    id: 4,
    title: strings.notification,
    icon: 'notifications-outline',
    route: StackNav.NotificationSetting,
  },
  {
    id: 5,
    title: strings.payment,
    icon: 'wallet-outline',
    route: StackNav.Payment,
  },
  {
    id: 6,
    title: strings.linkedAccounts,
    icon: 'swap-vertical-outline',
    route: StackNav.Address,
  },
  {
    id: 7,
    title: strings.ticketIssues,
    icon: 'cash-outline',
  },
  {
    id: 7,
    title: strings.security,
    icon: 'shield-checkmark-outline',
    route: StackNav.Security,
  },
  {
    id: 8,
    title: strings.language,
    icon: 'options-outline',
    value: 'English(US)',
    route: StackNav.Language,
  },
  {
    id: 9,
    title: strings.darkMode,
    icon: 'contrast-outline',
    rightIcon: 'rightIcon',
  },
  {
    id: 10,
    title: strings.privacyPolicy,
    icon: 'lock-closed-outline',
    route: StackNav.PrivacyPolicy,
  },
  {
    id: 11,
    title: strings.helpCenter,
    icon: 'information-circle-outline',
    route: StackNav.HelpCenter,
  },
  {
    id: 12,
    title: strings.inviteFriends,
    icon: 'people-outline',
    route: StackNav.InviteFriends,
  },
  {
    id: 13,
    title: strings.rateUs,
    icon: 'star-outline',
  },
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
      {
        lnName: 'French',
      },
      {
        lnName: 'German',
      },
      {
        lnName: 'Italian',
      },
      {
        lnName: 'Portuguese',
      },
      {
        lnName: 'Russian',
      },
      {
        lnName: 'Turkish',
      },
      {
        lnName: 'Chinese',
      },
      {
        lnName: 'Japanese',
      },
      {
        lnName: 'Korean',
      },
      {
        lnName: 'Arabic',
      },
      {
        lnName: 'Hindi',
      },
      {
        lnName: 'Indonesian',
      },
      {
        lnName: 'Malay',
      },
      {
        lnName: 'Thai',
      },
    ],
  },
];

const bannerData = [
  {
    imgUrl: images.banner
  },
  {
    imgUrl: images.banner
  },
  {
    imgUrl: images.banner
  },
];

const menus = [
  {
    id: 1,
    image: images.audio,
    titleEn: 'Audio Gallery',
    routes: 'ListScreen'
  },
];

const listData = [
  {
      id: '1',
      url: require('../assets/audios/Al_Falaq_The_Dawn.mp3'),
      // artwork: require('../assets/images/ArtsCulture.jpg'),
      title: 'Al Falaq The Dawn',
      category: 'Arts & Culture',
      artist: 'Mesut Kurtis',
      date: '2007',
  },
  {
      id: '2',
      url: require('../assets/audios/Al_Ikhlas_The_Unity.mp3'),
      // artwork: require('../assets/images/hqdefault.jpg'),
      title: 'Al Ikhlas The Unity',
      category: 'Arts & Culture',
      artist: 'Ahmed Bukhatir',
      date: '2001',
     
  },
  {
      id: '3',
      url: require('../assets/audios/Al_Kafirun_The_Disbelievers.mp3'),
      // artwork: require('../assets/images/hqdefault1.jpg'),
      title: 'Al Kafirun The Disbelievers',
      category: 'Arts & Culture',
      artist: 'Maher Zain',
      date: '2012',
  },
  {
      id: '4',
      url: require('../assets/audios/Al_Kauthar_The_Abundance_of_Good.mp3'),
      // artwork: require('../assets/images/ArtsCulture.jpg'),
      title: 'Al Kauthar The Abundance of Good',
      category: 'Arts & Culture',
      artist: 'Mesut Kurtis',
      date: '2007',
  },
  {
      id: '5',
      url: require('../assets/audios/Al_Lahab_The_Flame.mp3'),
      // artwork: require('../assets/images/hqdefault.jpg'),
      title: 'Al Lahab The Flame',
      category: 'Arts & Culture',
      artist: 'Ahmed Bukhatir',
      date: '2001',
  },
  {
      id: '6',
      url: require('../assets/audios/Al_Quraish_The_Quraish.mp3'),
      // artwork: require('../assets/images/hqdefault1.jpg'),
      title: 'Al Quraish The Quraish',
      category: 'Arts & Culture',
      artist: 'Maher Zain',
      date: '2012',
  },
  {
    id: '7',
    url: require('../assets/audios/Al-Asr-The-Time.mp3'),
    // artwork: require('../assets/images/hqdefault1.jpg'),
    title: 'Al Asr The Time',
    category: 'Arts & Culture',
    artist: 'Maher Zain',
    date: '2012',
},
{
  id: '8',
  url: require('../assets/audios/An_Nas_The_Men.mp3'),
  // artwork: require('../assets/images/hqdefault1.jpg'),
  title: 'An Nas The Men',
  category: 'Arts & Culture',
  artist: 'Maher Zain',
  date: '2012',
},
{
  id: '9',
  url: require('../assets/audios/An_Nasr_The_Help.mp3'),
  // artwork: require('../assets/images/hqdefault1.jpg'),
  title: 'An Nasr The Help',
  category: 'Arts & Culture',
  artist: 'Maher Zain',
  date: '2012',
},
];

const HighestQualification = [
  { id: '1',label:'Select Highest Qualification', value: 'Select Highest Qualification', },
  { id: '2',label:'Secondary School (10th)', value: 'Secondary School (10th)',},
  { id: '3',label:'High School (12th)', value: 'High School (12th)', }, 
  { id: '4',label:'ITI', value: 'ITI', },
  { id: '5',label:'Diploma', value: 'Diploma',},
  { id: '6',label:'B.A., B.Sc, B.Com, BBA, etc', value: 'B.A., B.Sc, B.Com, BBA, etc', }, 
  { id: '7',label:'B.E, B.Tech, B.Arch', value: 'B.E, B.Tech, B.Arch', },
  { id: '8',label:'MBBS, MD, etc', value: 'MBBS, MD, etc',},
  { id: '9',label:'M.A., M.Sc, M.Com, MBA, etc', value: 'M.A., M.Sc, M.Com, MBA, etc', }, 
  { id: '10',label:'M.E, M.Tech, etc', value: 'M.E, M.Tech, etc', },
  { id: '11',label:'Less than Secondary School', value: 'Less than Secondary School',},
];

// Get the current year
const currentYear = new Date().getFullYear();
    const allRecords = [];

for (let year = 1950; year <= currentYear; year++) {
  const object = {
    label: year.toString(),
    value: year.toString(),
  };
  allRecords?.push(object);
}

export {
  ProfileSetting,
  languageData,
  bannerData,
  listData,
  menus,
  HighestQualification,
  allRecords
};
