import { StyleSheet, Dimensions } from "react-native";
import { ScaledSize } from "react-native";
import { Fonts } from "../../constans/fonts";
import { Colors } from "../../constans/colors";

const win: ScaledSize = Dimensions.get("window");
const ratio: number = win.width / 541;

export const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 14,
  },
  mainImage: {
    width: win.width,
    height: 800 * ratio,
  },

  mainHeadlineContainer: {
    position: "relative",
    bottom: 180,
    paddingLeft: 25,
    width: win.width / 1.2,
  },
  mainHeadlineContainerTitle: {
    color: Colors.white,
    fontSize: 42,
    lineHeight: 50,
    fontFamily: Fonts.extraBold,
    paddingRight: 100,
    textAlign: "left",
    backgroundColor: "transparent",
  },
  mainHeadlineContainerButton: {
    width: win.width / 2.5,
    backgroundColor: Colors.brandColor,
    height: 40,
    borderRadius: 50,
    marginTop: 10,
  },

  mainHeadlineContainerButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: Fonts.medium,
    paddingTop: 10,
    color: Colors.white,
  },
});
