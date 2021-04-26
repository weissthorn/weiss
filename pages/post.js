import * as React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import SinglePost from '../components/SinglePost';
import { Row, Col } from 'react-grid-system';
import moment from 'moment';

function HomePage() {
  return (
    <Page title="Home" description="" top>
      <Header />
      <div className="container">
        <div className="thread">
          <Row>
            <Col xs={12} lg={9}>
              <h1>Flagrow LaTeX expressions renderer for Flarum</h1>
              <div className="meta">
                <span>Global Village</span>
                <span className="action">Edit</span>
              </div>
              <div className="post-thread">
                <Row>
                  <Col xs={12} lg={1}>
                    <img src={'https://discuss.flarum.org/assets/avatars/SeXysKqI5lQzLeXU.png'} />
                  </Col>
                  <Col xs={12} lg={9}>
                    <span className="name">James Morgan</span>
                    <span className="date">{moment().format('MMM d, YYYY @ h:MM A')}</span>
                    <div>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="post-thread">
                <Row>
                  <Col xs={12} lg={1}>
                    <img src={'https://discuss.flarum.org/assets/avatars/SeXysKqI5lQzLeXU.png'} />
                  </Col>
                  <Col xs={12} lg={9}>
                    <span className="name">James Morgan</span>
                    <span className="date">{moment().format('MMM d, YYYY @ h:MM A')}</span>
                    <div>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                      <p>
                        My old package had some conflicts with other packages. So, while fixing it,
                        we moved it to a new Flagrow-made package: Latex
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              Category
            </Col>
          </Row>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
