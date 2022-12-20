import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import { BiPlayCircle } from "react-icons/bi";
import { RiPlayCircleLine } from "react-icons/ri";
const arr=[
  ['assests/images/635c0a53670aa9b611314996afb28e7cbfb6a4ec.png',"Jamdani"],
  ['assests/images/2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png' ,"Lorem ipsum dolor sit amet"],
  ['assests/images/2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png' ,"Lorem ipsum dolor sit amet"]

];
const recommendedData = [
  {
    id: 0,
    title: "Jamdani",
    imgSrc: "/assets/images/RecommendedVideos/video1.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "/assets/images/RecommendedVideos/video2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "/assets/images/RecommendedVideos/video3.png",
  },
];

const Vedio = () => {
  return (
    <>
      <Container className={styles.RecVideosContainer}>
        <Row>
          {arr.map((video) => {
            return (
              <Col
                xl="4"
                lg="4"
                md="4"
                sm="4"
                key={video.id}
                className={styles.video}
              >
                <img
                  className={styles.videoImg}
                  src={video[0]}
                  alt={video[1]}
                />
                <p className={styles.par}>{video[1]}</p>
                <div className={styles.overlay}>
                  {/* <BiPlayCircle    color="white" className={styles.playIcon} /> */}
                  <RiPlayCircleLine color="white" className={styles.playIcon}/>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
         
        </Row>
      </Container>
    </>
  );
};

export default Vedio;