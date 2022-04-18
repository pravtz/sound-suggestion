import type { NextPage } from "next";
import ContentMain from "../components/ContentMain";
import MainComponent from "../Layout/Main";

const home: NextPage = () => {
  return (
    <MainComponent>
      <ContentMain />
    </MainComponent>
  );
};
export default home;
