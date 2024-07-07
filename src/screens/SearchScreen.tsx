import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SPACING } from '../theme/theme';
import MovieCard from '../components/MovieCard';
import { baseImagePath, searchMovies } from '../api/apicall';
import SubMovieCard from '../components/SubMovieCard';
import InputHeader from '../components/InputHeader';

const { width, height } = Dimensions.get('screen');

const SearchScreen = ({navigation}: any) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (err) {
      console.error('search loi ');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          // horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          numColumns={2}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.centerContainer}
          renderItem={({ item, index }) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', { movieid: item.id });
              }}
              cardWidth={width / 2 - SPACING.space_12*2}
              // isFirst={index == 0 ? true : false}
              // isLast={index == searchList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
    width,
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_28,
    marginBottom : SPACING.space_28 - SPACING.space_12,
    display : 'flex',
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  centerContainer : {
    alignItems :  'center',

  }
});
