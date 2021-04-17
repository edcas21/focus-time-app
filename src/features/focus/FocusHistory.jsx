import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.historyItem(item.status)}>
      {`${item.status == 1 ? "Done" : "Cancelled"} ` +
        JSON.stringify(item.subject).replace(/['"]+/g, "")}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things you've focused on:</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? colors.darkRed : colors.green,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing.md,
  },
});
