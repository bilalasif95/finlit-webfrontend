/*
 * Hackathon List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import ArticleListFilters from '../../../components/student-panel/ArticleList/ArticleListFilters';
import ArticleList from '../../../components/student-panel/ArticleList/ArticleList';

export default function ArticalList() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Hackathon List</title>
        <meta name="description" content="Hackathon List" />
      </Helmet>
      <Container fluid="xl">
        <ArticleListFilters />
        <ArticleList />
      </Container>
    </div>
  );
}
