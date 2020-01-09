import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageDataButton = ({ backgroundImage, isLight, image, title, subtitle, titleStyles, subtitleStyles, button, onButtonPress, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      {backgroundImage}
      <View style={styles.image}>
        {image}
      </View>
      <TouchableOpacity onPress={() => onButtonPress && onButtonPress()} style={styles.customButton}>
        <Text style={styles.textCustomButton}>{title}</Text>
      </TouchableOpacity>
    </PageContent>
  </Page>
  
);

const PageDataStandard = ({ backgroundImage, isLight, image, title, subtitle, titleStyles, subtitleStyles, button, onButtonPress, ...rest }) => (
  <Page {...rest}>
    {backgroundImage}
    <PageContent>
      <View style={styles.content}>
        <View style={styles.image}>
          {image}
        </View>
        <Text style={[styles.title, titleStyles, (isLight ? styles.titleLight : {}) ]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, subtitleStyles, (isLight ? styles.subtitleLight : {}) ]}>
          {subtitle}
        </Text>
      </View>
    </PageContent>
  </Page>
);

const PageData = (params) => {
  if(params && params.button) return PageDataButton(params);
  return PageDataStandard(params);
}

const styles = {
  content: {
    width:'100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: 'auto',
    paddingBottom: 0,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
    paddingBottom: 15,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 24 
  },
  textCustomButton: {
    color: '#12308A',
    fontSize: 14,
    fontWeight: 'bold'
  }
};

export default PageData;
