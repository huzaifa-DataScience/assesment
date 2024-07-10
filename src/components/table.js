import React, { useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button,
  CircularProgress
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchEvent } from '../redux/eventSlice';

const BeautifulTable = () => {
  const navigate = useNavigate();
  const randomDateGenerator = require('random-date-generator');

  const dispatch = useDispatch();

  const eventList = useSelector((state) => state.event.users);
  const status = useSelector((state) => state.event.status);
  const error = useSelector((state) => state.event.error);

  const startDate = new Date('2020-01-01');
  const endDate = new Date('2024-12-31');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvent());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const signUpButton = (e) => {
    navigate('/registration');
  };

  return (
    <div className="overflow-y-auto max-h-screen sm:max-h-none sm:overflow-y-hidden sm:overflow-x-auto sm:w-full">
      <TableContainer component={Paper} className="bg-[#580052] w-full">
        <Table className="min-w-full text-white" aria-label="simple table">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="bg-[#580052]">
                <span className="text-white font-bold text-[20px]">Event Name</span>
              </TableCell>
              <TableCell align="right" className="bg-[#580052]">
                <span className="text-white font-bold text-[20px]">Place</span>
              </TableCell>
              <TableCell align="right" className="bg-[#580052]">
                <span className="text-white font-bold text-[20px]">Date&nbsp;</span>
              </TableCell>
              <TableCell align="right" className="bg-[#580052]">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#580052]">
            {eventList.map((row) => (
              <TableRow
                key={row.name}
                className="transition-transform duration-300 ease-in-out hover:transform hover:scale-[99%] bg-white hover:bg-gray-200"
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.address.city}</TableCell>
                <TableCell align="right">
                  {randomDateGenerator.getRandomDate(startDate, endDate).toDateString()}
                </TableCell>
                <TableCell align="right">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="ml-2"
                    onClick={signUpButton}
                  >
                    Register
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BeautifulTable;
