import React, { useState, useEffect } from 'react'
import CircleProgress from '../../circle-progress'
import FolderList from '../../folder-list'
import Widget from '../../widget'
import Button from '@mui/material/Button';

import Link from 'next/link';

const ExpensesList = ({title}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <Widget title={'Expenses List'} loading={loading}>
      {/* <CircleProgress value={5} /> */}
      <Button
        variant="contained"
        href="/expenses-list"
      >
        Full List
      </Button>
      <FolderList></FolderList>
    </Widget>
  )
}

export default ExpensesList

