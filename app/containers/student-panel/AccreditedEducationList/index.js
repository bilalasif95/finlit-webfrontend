/*
 * Courses List Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import CoursesFilters from '../../../components/student-panel/AccreditedEducationList/CoursesFilters';
import CoursesList from '../../../components/student-panel/AccreditedEducationList/CoursesList';

export default function AccreditedEducationListPage() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Courses List</title>
        <meta name="description" content="Courses List" />
      </Helmet>
      <Container fluid="xl">
        <CoursesFilters />
        <CoursesList />
      </Container>
    </div>
  );
}
