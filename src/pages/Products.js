import React from 'react';
import ConfigurableDataGrid from '../components/DataGrid/ConfigurableDataGrid'; // Path to your component

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'age', headerName: 'Age', flex: 1 },
];

const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
];
const title = "Products List"
function Products() {
  return (
    <div>
      <ConfigurableDataGrid title ={title} columns={columns} data={data} />
    </div>
  );
}

export default Products;
