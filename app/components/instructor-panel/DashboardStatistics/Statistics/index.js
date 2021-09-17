import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
// import Wrapper from './Wrapper';
import messages from './messages';

function DashboardStatistics() {
  return (
    <Row>
      <Col lg={8}>
        <div className="statistics-chart">
          <h3>
            <FormattedMessage {...messages.Title} />
          </h3>
        </div>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

export default DashboardStatistics;
