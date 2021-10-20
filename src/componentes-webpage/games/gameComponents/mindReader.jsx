import React, { useRef, useEffect } from "react";
import { useStyles } from "./mindReaderstyles";
import { Grid, Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

function MindReader(props) {
  const classes = useStyles();
  const tableRows = useRef([]);

  // if (!props.showReload){
  useEffect(() => {
    let j = 1;
    let a = 0;
    let row = [];

    tableRows.current = [];
    for (let i = 99; i >= 0; i--) {
      a = Math.round(Math.random() * 40);
      if ((i % 9 === 0) && (i < 89)) a = props.ax;
      row.push(i);
      row.push(props.arr[a]);

      if (j % 10 === 0) { // Cambio de fila
        tableRows.current.push(Object.assign({}, row));
        row = [];
      }
      j++;
    }

  }, [props.ax, props.arr]);
  //}
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableBody>
            {tableRows.current.map((row, i) => (
              <TableRow key={i} className={classes.row}>
                <TableCell className={classes.td} align="center">{row[0]}</TableCell>
                <TableCell className={classes.td} align="center">{row[1]}</TableCell>
                <TableCell className={classes.td} align="center">{row[2]}</TableCell>
                <TableCell className={classes.td} align="center">{row[3]}</TableCell>
                <TableCell className={classes.td} align="center">{row[4]}</TableCell>
                <TableCell className={classes.td} align="center">{row[5]}</TableCell>
                <TableCell className={classes.td} align="center">{row[6]}</TableCell>
                <TableCell className={classes.td} align="center">{row[7]}</TableCell>
                <TableCell className={classes.td} align="center">{row[8]}</TableCell>
                <TableCell className={classes.td} align="center">{row[9]}</TableCell>
                <TableCell className={classes.td} align="center">{row[10]}</TableCell>
                <TableCell className={classes.td} align="center">{row[11]}</TableCell>
                <TableCell className={classes.td} align="center">{row[12]}</TableCell>
                <TableCell className={classes.td} align="center">{row[13]}</TableCell>
                <TableCell className={classes.td} align="center">{row[14]}</TableCell>
                <TableCell className={classes.td} align="center">{row[15]}</TableCell>
                <TableCell className={classes.td} align="center">{row[16]}</TableCell>
                <TableCell className={classes.td} align="center">{row[17]}</TableCell>
                <TableCell className={classes.td} align="center">{row[18]}</TableCell>
                <TableCell className={classes.td} align="center">{row[19]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid item xs={4} align="center" className={classes.respContainer}>
        {/* Aqui va la caja para hacer click y adivinar el simbolo*/}
        <Table className={classes.tableResp}>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tdResp} align="center" onClick={props.response}>?</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography component="p" className={props.showReload ? classes.open : classes.close} align="center" onClick={props.reload}>¿Probar de nuevo?</Typography>
      </Grid>
    </Grid>
  );
}
export default MindReader;
