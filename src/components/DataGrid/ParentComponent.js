import React from 'react';
import ConfigurableDataGrid from './ConfigurableDataGrid';

function ParentComponent() {

  const productColumns = [
    // Define columns for product data grid
  ];

  const productData = [
    // Provide data for product data grid
  ];

  return (
    <div>
      <ConfigurableDataGrid title = {title} columns={productColumns} data={productData} />
    </div>
  );
}

export default ParentComponent;
