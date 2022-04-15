import React from 'react'
import { Grommet, Box, Nav, TextInput, DataTable } from 'grommet'
import { Bitcoin } from 'grommet-icons'


const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column" justify="start" background={{"color":"dark-6"}}>
        <Nav align="stretch" flex={false} justify="start" direction="row">
          <TextInput placeholder="Search Coins" icon={<Bitcoin />} disabled={false} textAlign="start" size="medium" />
        </Nav>
        <DataTable
          columns={[
            {header: "Name", property: "name", primary: true},
            {header: "symbol", property: "symbol"},
            {property: "price", header: "price"}]}
           data={[{"name":"Eric","Symbol":5,"price":"18"},{"name":"Shimi","Symbol":"7","price":"12"}]} fill={false} />
      </Box>
    </Grommet>
  )
}
