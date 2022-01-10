import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(20),
  marginTop: 40,
  marginLeft: 50,
  marginRight: 50,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:'10px',
  borderColor:'#B6B6B4',
  border:'solid'
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0}>
        <Box gridColumn="span 3">
          <Item>xs=3</Item>
        </Box>
        <Box gridColumn="span 5">
          <Item>xs=5</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 3">
          <Item>xs=3</Item>
        </Box>
        <Box gridColumn="span 5">
          <Item>xs=5</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
      </Box>
    </Box>
  );
}