import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Flag from "react-world-flags";
import styled from "styled-components";

const currencies = [
    {
        value: "gb"
    },
    {
        value: "nor"
    },
    {
        value: "ind"
    }
];

const StyledSelect = styled(Select)`
  .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiSelect-iconOutlined {
    fill: blue;
    right: 1px;

  }
`;


export default function SelectTextFields() {
    return (
        <Box >
            <StyledSelect
                sx={{ width: 100, height: 35 }}
                defaultValue="gb"
                displayEmpty
                renderValue={(value) => {
                    return (
                        <Box style={{ height: '30px', width: '100%' }}>
                            <Flag code={value} height={30} />
                        </Box>
                    );
                }}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ minHeight: '30px', minWidth: '30px' }}>
                        <Flag code={option.value} height={30} />
                    </MenuItem>
                ))}
            </StyledSelect>
        </Box>
    );
}
