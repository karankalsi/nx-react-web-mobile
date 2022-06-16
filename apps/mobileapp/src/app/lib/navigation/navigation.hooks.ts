import { useNavigation } from "@react-navigation/native";
import { AppNavigator } from "./Navigation.types";

export const useAppNavigation = () => {
  const navigation = useNavigation<AppNavigator>();
  return navigation;
};
