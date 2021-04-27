import { Row, Col } from 'react-grid-system';
import Link from 'next/link';
import moment from 'moment';

export default function SinglePost({ avatar, title, name, link }) {
  return (
    <Link href="/">
      <a className="single-post">
        <Row>
          <Col xs={12} lg={1}>
            <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
          </Col>
          <Col xs={12} lg={8}>
            <div className="post">
              <h3>{title}</h3>
              <span className="name">{name}</span>
              <span className="date">{moment().format('MMM D, YYYY @ h:mm A')}</span>
              <span className="reply">24 replies</span>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="replies">
              <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
              <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
              <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
              <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
              <img src={avatar} style={{ width: '50px', height: '50px', borderRadius: 25 }} />
            </div>
          </Col>
        </Row>
      </a>
    </Link>
  );
}
