import Head from "next/head";
import ContainerBox from "../../components/ContainerBox";
import HeadMain from "../../components/HeadMain";
import NavBottomMain from "../../components/NavBottomMain";
import RatingAsideMain from "../../components/RatingAsideMain";

import BackgroundLayout from "../BackgroundLayout";
import MainLayout from "../MainLayout";
import { styled } from "../../styles/stitches.config";

const Main = ({ children }: any) => {
  const ContentLayout = styled("div", {
    gridArea: "CO",
    padding: 12,
  });
  const AsideLayout = styled("div", {
    gridArea: "AS",
    padding: 12,
  });
  const HeaderLayout = styled("div", {
    gridArea: "HE",
    padding: 12,
  });
  const Wrapper = styled("div", {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  return (
    <div>
      <Head>
        <title>Main</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundLayout>
          <MainLayout>
            <HeaderLayout>
              <HeadMain />
            </HeaderLayout>

            <ContentLayout>
              <ContainerBox variant="full">{children}</ContainerBox>
            </ContentLayout>

            <AsideLayout>
              <ContainerBox variant="full">
                <Wrapper>
                  <RatingAsideMain />
                  <NavBottomMain />
                </Wrapper>
              </ContainerBox>
            </AsideLayout>
          </MainLayout>
        </BackgroundLayout>
      </main>
    </div>
  );
};

export default Main;