import React, { useState } from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import SinglePost from '../components/SinglePost';
import { Row, Col } from 'react-grid-system';

function HomePage() {
  const [status, setStatus] = useState('Popular');
  return (
    <Page title="Home" description="" top>
      <Header />
      <div className="container">
        <Row>
          <Col xs={12} lg={2}>
            Category
          </Col>
          <Col xs={12} lg={10}>
            <div className="top-layer">
              <div class="dropdown">
                <button class="dropbtn">
                  Popular <i className="ion ion-android-arrow-dropdown"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Popular</a>
                  <a href="#">Recent</a>
                  <a href="#">Unanswered</a>
                </div>
              </div>
            </div>
            <SinglePost
              avatar="https://discuss.flarum.org/assets/avatars/SeXysKqI5lQzLeXU.png"
              name="Jan Koum"
              title="Sample post from founder of Whatsapp"
            />
            <SinglePost
              avatar="https://discuss.flarum.org/assets/avatars/SeXysKqI5lQzLeXU.png"
              name="Jan Koum"
              title="Sample post from founder of Whatsapp"
            />
            <SinglePost
              avatar="https://discuss.flarum.org/assets/avatars/SeXysKqI5lQzLeXU.png"
              name="Jan Koum"
              title="Sample post from founder of Whatsapp"
            />
          </Col>
        </Row>
      </div>
    </Page>
  );
}

export default HomePage;
