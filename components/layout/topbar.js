import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Button from '@mui/material/Button';

const TopbarWrapper = styled.main`
  align-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.palette.backgroundColor};
  color: ${props => props.theme.palette.textColor};
  display: flex-start;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  min-height: 28px;
  padding: .25rem;
  border-bottom: 1px solid lightgrey;
  flex-gap: 1rem;
  column-gap: 1rem;
`

function Topbar() {
  return (
    <TopbarWrapper>
      <Button
        variant="contained"
        href="/accountability-dashboard"
      >
        Dashboard
      </Button>
      <Button
        variant="contained"
        href="/expenses-list"
      >
        Expenses
      </Button>
    </TopbarWrapper>
  )
}

export default Topbar