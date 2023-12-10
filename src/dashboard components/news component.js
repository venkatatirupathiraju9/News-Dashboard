import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsMainComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-11-10&sortBy=publishedAt&apiKey=ef87a2601ddf4e9a8f4939c55c3bd28a"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      })
      .catch((error) => {
        alert("Responce in not Correct!", error);
      });
  }, []);

  return (
    <>
      <h1>News Dashboard:</h1>

      <Container>
        <Row className="m-3">
          {news.map((article, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img
                    variant="top"
                    src={article.urlToImage}
                    height={200}
                  />
                  <Card.Body>
                    <Card.Title>{article.title.slice(0, 69)}</Card.Title>
                    <Card.Text>{article.description.slice(0, 50)}</Card.Text>
                    <Button variant="primary" href={article.url}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default NewsMainComponent;
