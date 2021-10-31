import { useLoginQuery } from '@/generator/foundation.operation';
import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.module.scss';
import { Loading, Popup, Button } from 'annar';

export default () => {
  const { data, loading } = useLoginQuery({
    variables: {
      username: '18554870324',
      password: '123456',
    },
  });

  const [show, setShow] = React.useState(false);

  if (loading) {
    return (
      <View className={styles.main}>
        <Loading type="wave" />
      </View>
    );
  }

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Button onTap={() => setShow(true)}>Click here</Button>
        <Popup
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <View
            style={{
              padding: '80px',
            }}
          >
            Hi, boy~
          </View>
        </Popup>
      </View>
    </View>
  );
};
