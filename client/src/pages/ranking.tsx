import type { NextPage } from "next";

import MainComponent from "../Layout/Main";
import RatingScreen from "../components/screens/RankingScreen";
import { styled } from "../styles/stitches.config";

const WrapperRatingScreen = styled("div", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$border-box",
  borderRadius: "$4",
  padding: "$5",
  height: "100%",
});

const ranking: NextPage = () => {
  return (
    <MainComponent>
      <WrapperRatingScreen>
        <RatingScreen />
      </WrapperRatingScreen>
    </MainComponent>
  );
};
export default ranking;
