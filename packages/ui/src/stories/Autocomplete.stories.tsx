import { Meta } from '@storybook/react';
import React from 'react';
import { Autocomplete } from '../Autocomplete';
import { Document } from '../Document';

export default {
  title: 'Medplum/Autocomplete',
  component: Autocomplete,
} as Meta;

export const Single = () => (
  <Document>
    <Autocomplete id="foo" resourceType="Patient" />
  </Document>
);

export const Multiple = () => (
  <Document>
    <Autocomplete id="foo" resourceType="Patient" multiple={true} />
  </Document>
);
