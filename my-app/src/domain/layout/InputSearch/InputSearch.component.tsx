import { TextField, InputAdornment } from "@mui/material"
import styled from "styled-components";

export const ImgIconStyled = styled.img`
    width: 20px;
`;

export default function InputSearchComponent({ textSearchInput, setTextSearchInput }: any) {

    return (
        <TextField
          value={textSearchInput}
          placeholder="search..."
          id="standard-start-adornment"
          sx={{ m: 1, background: '#1A1A1A', padding: '0px 5px 0px 20px', height: '50px', borderRadius: '6px', display: 'flex', flexDirection: 'row', margin: '18px 0px', width: '100%'  }}
          InputProps={{
            style: { color: 'white', width: '100%' },
            startAdornment: <InputAdornment position="start"><ImgIconStyled src={'../assets/vectorSearch.svg'} /></InputAdornment>,
            disableUnderline: true,
          }}
          variant="standard"
          onChange={(e: any) => setTextSearchInput(e.target.value)}
      />
    )
}