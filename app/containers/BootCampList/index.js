/*
 * BootCamp List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import BootCampFilters from '../../components/BootCampList/BootCampFilters';
import BootCampListComp from '../../components/BootCampList/BootCampList';

export default function BootCampList() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>BootCamp List</title>
        <meta name="description" content="BootCamp List" />
      </Helmet>
      <Container fluid="xl">
        <BootCampFilters />
        <BootCampListComp />
      </Container>
    </div>
  );
}
