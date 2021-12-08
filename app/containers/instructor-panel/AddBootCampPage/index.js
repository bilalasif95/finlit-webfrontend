/*
 * Add BootCamp Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import AddBootCamp from '../../../components/instructor-panel/AddBootCamp';

export default function AddBootCampPage() {
  return (
    <>
      <Helmet>
        <title>Add BootCamp Page</title>
        <meta name="description" content="Add BootCamp Page" />
      </Helmet>
      <AddBootCamp />
    </>
  );
}
