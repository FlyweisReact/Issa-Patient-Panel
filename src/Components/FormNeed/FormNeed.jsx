// Your main React component

import React from 'react';
import InitialAssessment from '../../Components/Forms/Initial-Assessment';

const YourComponent = () => {
  const needs = ['Need 1', 'Need 2', 'Need 3', 'Need 4', 'Need 5']
  const interventions = ['Intervention 1', 'Intervention 2', 'Intervention 3', 'Intervention 4', 'Intervention 5'];

  return (
    <div>
      <h1>Needs and Interventions Comparison</h1>
      <InitialAssessment needs={needs} interventions={interventions} />
    </div>
  );
};

export default YourComponent;
