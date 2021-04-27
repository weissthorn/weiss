import { Row, Col } from 'react-grid-system';
import Page from '../../components/Page';
import Sidebar from '../../components/Sidebar';

export default function Index() {
  return (
    <Page>
      <Sidebar title="Sample" />
      <div className="content">
        <div className="container">Dev</div>
      </div>
    </Page>
  );
}
