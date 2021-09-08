/*
 * Hackathon List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import HackathonFilters from '../../components/HackathonList/HackathonFilters';
import HackathonListComp from '../../components/HackathonList/HackathonList';

export default function HackathonList() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Hackathon List</title>
        <meta name="description" content="Hackathon List" />
      </Helmet>
      <Container fluid="xl">
        <HackathonFilters />
        <HackathonListComp />
      </Container>
    </div>
  );
}
