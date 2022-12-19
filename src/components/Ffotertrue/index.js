import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
import LeftFooterItems from "./LfetFoter";
import RightFooterItems from "./RightFoteer";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.FooterContainer}>
        <Row>
          <LeftFooterItems />
          <RightFooterItems />
        </Row>
        <Row >
         <p className={styles.CopyRight}>© Copyright Matter PTE LTD  2017</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;