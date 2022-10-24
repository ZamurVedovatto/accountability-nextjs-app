import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const dataFake = [
  {
    primary: 'Notebook',
    secondary: 'Jan 9, 2014',
  },
  {
    primary: 'Italian Citizenship',
    secondary: 'Jan 9, 2014',
  },
  {
    primary: 'Abroad Trip',
    secondary: 'Jan 9, 2014',
  },
  {
    primary: 'Exchange, Jacksonville',
    secondary: 'Jan 9, 2014',
  }
]

export default function FolderList() {
  const [data, setData] = useState(dataFake)

  // useEffect(() => {
  //   setData(

  //   )
  // }, [])
  

  console.log(data)

  return (
    <List sx={{ width: '100%', maxWidth: 360, maxHeight: '100%', bgcolor: 'transparent' }}>
      {/* {
        data ? 
          (
          data.map((item) => {
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <span>{JSON.stringify(item.primary)}</span>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          })
          )
        : 
        <span>nothing here</span>
      } */}

      {data.map(item => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
        // <li
        //   key={item.primary}
        // >
        //   {item.primary}
        // </li>
      ))}
    </List>
  );
}
