import React, { FC } from "react";
import { styles } from "./styles";
import { HomePageText } from "../../components/homePageText";

export const HomePage: FC = () => {
    return (
        <HomePageText margin={styles.helloText} />
    );
}