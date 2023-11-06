import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data, TableHeadComponent, TableBodyComponent, typeTable }: any) {
  
  return (
    <TableContainer sx={{ background: "transparent" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHeadComponent typeTable={typeTable} />
        <TableBodyComponent typeTable={typeTable} data={data} />
      </Table>
    </TableContainer>
  );
}
