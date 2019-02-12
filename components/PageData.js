import React from 'react';
import { View, Text, Button } from 'react-native';

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

const PageDataButton = ({ isLight, image, title, subtitle, titleStyles, subtitleStyles, button, onButtonPress, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <Button title={title} onPress={() => onButtonPress && onButtonPress()} />
    </PageContent>
  </Page>
);

const PageDataStandard = ({ isLight, image, title, subtitle, titleStyles, subtitleStyles, button, onButtonPress, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <Text style={[styles.title, titleStyles, (isLight ? styles.titleLight : {}) ]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, subtitleStyles, (isLight ? styles.subtitleLight : {}) ]}>
        {subtitle}
      </Text>
    </PageContent>
  </Page>
);

const PageData = (params) => {
  if(params && params.button) return PageDataButton(params);
  return PageDataStandard(params);
}

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0,
    paddingBottom: 60,
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
};

export default PageData;
