import { DataGrid } from '@mui/x-data-grid';
import './styles.css';
import React, { useState } from 'react';

function ConfigurableDataGrid({title ,columns, data }) {

  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  // Apply the class name 'custom-header' to the headerClassName property
  const styledColumns = columns.map(column => ({
    ...column,
    headerClassName: 'custom-header',
  }));

  return (
  
    <div style={{ height: '400px', width: '800px', margin: '0 auto' }}>
      <h2>{title}</h2>
      <DataGrid 
      columns={styledColumns} 
      rows={data} 
      style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}

export default ConfigurableDataGrid;