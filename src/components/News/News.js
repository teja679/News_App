import * as React from 'react';
import './styles.css'
import { Container, Card,  Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function News({ newsList }) {
  return (
    <Container>
    <Row>
      {newsList && newsList.map((singleNews, index) => (
        <Col md={4} key={index} className="single-news">
          <Card className="text-center">
            <Card.Img
              variant="top"
              src={
                singleNews.urlToImage
                  ? singleNews.urlToImage
                  : "https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
              }
              alt="single-news"
            />
            <Card.Body>
              <Card.Title>
                {singleNews.title && singleNews.title.length > 70
                  ? `${singleNews.title.slice(0, 70)}...`
                  : singleNews.title}
              </Card.Title>
              <Card.Text>
                {singleNews.description && singleNews.description.length > 120
                  ? `${singleNews.description.slice(0, 120)}...`
                  : singleNews.description}
              </Card.Text>
              <Link className='btn btn-dark' to={`/news/${index}`}>Read more</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}
export default News