import type { NextPage } from "next";
import ContentMain from "../components/ContentMain";
import AddScreen from "../components/screens/AddScreen";
import MainComponent from "../Layout/Main";

const add: NextPage = () => {
  return (
    <MainComponent>
      <AddScreen />
    </MainComponent>
  );
};
export default add;
