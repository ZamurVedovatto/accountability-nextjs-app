import React, { useState, useEffect } from 'react'
import CircleProgress from '../../circle-progress'
import Widget from '../../widget'

const ExpensesList = ({title}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  

  return (
    <Widget title={'Expenses List'} loading={loading}>
      <CircleProgress value={5} />
    </Widget>
  )
}

export default ExpensesList

