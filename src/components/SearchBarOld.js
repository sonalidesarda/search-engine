import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";

export default function SearchBar1() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [totalRows, setTotalRows] = useState(0); // Initialize totalRows state
  const [currentPage, setCurrentPage] = useState(0); // Initialize currentPage state
  const [pageSize, setPageSize] = useState(5); // Initialize with default page size
  const [data, setData] = useState({
    loading: true,
    rows: [],
    totalRows: 0,
    rowsPerPageOptions: [5, 10, 15],
    pageSize: 5,
    page: 1
  });

  const handleChange = (event) => {
    console.log("handleChange triggered:", event);

    setSearchTerm(event.target.value);
  };

  const handlePageChange = (params) => {
    // This function will be called when the page changes in the DataGrid
    console.log("Page changed:", params);
    const newPageNumber = params.page; // Get the new page number
    setCurrentPage(newPageNumber); // Update current page state
    setPageSize(params.pageSize);
    fetchSearchResults(newPageNumber,params.pageSize); // Call the API with the updated page number
  };

  const handleSearchClick = async () => {
    try {
      const API_URL = "http://127.0.0.1:5000";
      // Initialize pageSize as 5, and use it for the initial API call.
//      setPageSize(5);
      const response = await fetch(`${API_URL}/searchresults?query=${searchTerm}&pageNumber=${0}&pageSize=${pageSize}`);
      const data = await response.json();
      setSearchResults(data.review_search_result);
      setTotalRows(data.count);
      setCurrentPage(0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSearchResults = async (pageNumber,pageSize) => {
    try {
      const API_URL = "http://127.0.0.1:5000";
      const response = await fetch(`${API_URL}/searchresults?query=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
      const data = await response.json();
      setSearchResults(data.review_search_result);
      setTotalRows(data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "asin", headerName: "asin", width: 100 }, 
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "reviewScore", headerName: "Review Score", width: 120 },
    { field: "reviewSummary", headerName: "Review Summary", width: 300 },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        color="primary"
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSearchClick} style={{ cursor: 'pointer' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ height: 400, width: '100%', marginTop: 20 }}>
      <DataGrid
        density="compact"
        autoHeight
        rowHeight={50}
        //
        pagination
        paginationMode="server"
        loading={data.loading}
        rowsPerPageOptions={data.rowsPerPageOptions}
       
        rows={searchResults}
        columns={columns}
        pageSize={pageSize} // this should be 5 initially and update based on handlePageChange
        rowCount={totalRows} 
        onPageChange={handlePageChange}
        page={currentPage}
        onPageSizeChange={(data) => {
          updateData("page", 1);
          updateData("pageSize", data.pageSize);
        }}
      />
      </div>
    </Container>
  );
}
