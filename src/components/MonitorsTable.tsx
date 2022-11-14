import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import { IInventoryFormPayload } from "../interfaces/IInventory";

export interface IMonitorsTable {
  monitorsList: IInventoryFormPayload[];
}

const MonitorsTable = (monitorsList: IMonitorsTable) => {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#000",
        paddingTop: 2,
      }}
    >
      <Box sx={{ paddingBottom: 2 }}>
        <Typography fontSize="2rem" fontWeight={700} color="#FFF">
          Current Inventory
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Number</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Screen Size</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monitorsList.monitorsList.map((monitor) => (
              <TableRow
                key={monitor.productNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {monitor.productNumber}
                </TableCell>
                <TableCell align="center">{monitor.brand}</TableCell>
                <TableCell align="center">{monitor.screenSize}"</TableCell>
                <TableCell align="center">R$ {monitor.price}</TableCell>
                <TableCell align="center">{monitor.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default MonitorsTable;
