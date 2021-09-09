/*
 * Live Webinars List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import WebinarsFilters from '../../components/LiveWebinarsList/WebinarsFilters';
import WebinarsList from '../../components/LiveWebinarsList/WebinarsList';

export default function LiveWebinarsList() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Live Webinars List</title>
        <meta name="description" content="Live Webinars List" />
      </Helmet>
      <Container fluid="xl">
        <WebinarsFilters />
        <WebinarsList />
      </Container>
    </div>
  );
}
