import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

function PageLoading({ loading, children, refreshFn }) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} enabled={false} tintColor={'#fff'} refreshing={refreshing} />
      }
    >
      {loading ? <ActivityIndicator style={{ paddingTop: 100 }} size="large" color="#fff" /> : children}
    </ScrollView>
  );
}

PageLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  refreshFn: PropTypes.func,
};

export default PageLoading;
