import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import MUIDataTable from  "mui-datatables";
import React from "react";
import { muiTableOptionType } from "../../class/Utilites";
interface props {
    tableColums: any,
    tableData : any
}

const Table: React.FC<props> = (props) => {
    const getMuiTheme = () => createTheme({
        
    })

    return(
        <div className="card-white">
            <ThemeProvider theme={getMuiTheme()}    >
                <MUIDataTable 
                    columns={props.tableColums} 
                    data={props.tableData} 
                    title={""} 
                    options={options}
                />
            </ThemeProvider>
        </div>
    )
}

export default Table


// Options for MUIDataTables
const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 10,
    responsive: 'standard',
    pagination : true,
    textLabels: {
        body: {
          noMatch: "No Transactions currently, please purchase a card or coin to see your transactions",
          toolTip: "Sort",
          
        }
    }
}
