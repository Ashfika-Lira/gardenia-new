import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Review = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [latestNews, setLatestNews] = useState([]);
  console.log(latestNews);

  useEffect(() => {
    fetch("https://pacific-meadow-17159.herokuapp.com/happyreview")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);
  return (
    <div className="news-bg container-fluid">
      <h2 className="text-center title-1 fs-1">
        Latest news (<span className="text-warning">{latestNews.length}</span>)
      </h2>

      <Carousel
        className="mt-4 carousel-container "
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(0, 4).map((news) => (
              <Col>
                <Card className="news-card">
                  <Card.Img
                    className="h-50 w-50 mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {" "}
                      {news.name}{" "}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(2, 6).map((news) => (
              <Col>
                <Card className="news-card">
                  <Card.Img
                    className="img-size mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {" "}
                      {news.name}{" "}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(0, 4).map((news) => (
              <Col>
               <Card className="news-card">
                  <Card.Img
                    className="h-50 w-50 mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {" "}
                      {news.name}{" "}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Review;
