/*
 * Live Session List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import LiveSessionFilters from '../../components/LiveSessionList/LiveSessionFilters';
import LiveSessionListComp from '../../components/LiveSessionList/LiveSessionList';

export default function LiveSessionList() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Live Session List</title>
        <meta name="description" content="Live Session List" />
      </Helmet>
      <Container fluid="xl">
        <LiveSessionFilters />
        <LiveSessionListComp />
      </Container>
    </div>
  );
}
