import React from "react";
import { View } from "react-native";

import { styles } from './styles'

interface ISkillBar {
  value: number;
}

const SkillBar: React.FC<ISkillBar> = ({ value }) => {
  return (
    <View style={styles.progressContent}>
      {new Array(43).fill("").map((p, index) => {
        const power = value * 0.4;
        const type = index <= power;
        if (index === power) {
          return <View style={styles.progressStrong} />;
        } else {
          return (
            <View
              style={
                type ? styles.progressWeakBefore : styles.progressWeakAfter
              }
            />
          );
        }
      })}
    </View>
  );
};

export default SkillBar;
