import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';
import Checkbox from './Comp3';

// Define the TypeScript interface for the data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define columns for the DataGrid
const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 2 },
  { field: 'body', headerName: 'Body', flex: 3 },
];

export default function DataTable() {
  // State to store fetched data
  const [data, setData] = useState<Post[]>([]);

  // Fetch data from the API (e.g., JSONPlaceholder) when the component mounts
  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container maxWidth='md'>
      <Typography variant="h4" gutterBottom>
        Page 2
      </Typography>
        <Typography variant="h6" gutterBottom>
          Api call implementing Datagrid
        </Typography>
        <DataGrid rows={data} columns={columns} style={{ height: '500px' }} />
        <Typography variant="h6" gutterBottom>
          Checkboxes
        </Typography>
        <Checkbox />
    </Container>
  );
}
