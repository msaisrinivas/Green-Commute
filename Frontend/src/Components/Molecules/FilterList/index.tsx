import { Grid, Typography } from '@mui/material';
import React from 'react'
import { theme } from '../../../Theme';
import { CheckBoxText } from '../CheckBoxText';

export interface FilterListProps {
  title?: string,
  labelArray: string[],
  onChange?: (e: React.SyntheticEvent) => void,
}

export const FilterList = (props: FilterListProps) => {

  return (
    <Grid data-testid="filterListId" sx={{ paddingBottom: "24px", paddingRight: "7.5px",marginLeft:"0px",fontFamily:theme.typography.fontFamily }} className="tableParameters" item sm={4} >

      <Typography variant='body1' sx={{
        fontFamily: theme.typography.body1.fontFamily, paddingBottom: "12px", fontSize: "16px",
        fontWeight: theme.typography.body1.fontWeight}}
        className='heading'>{props.title}
      </Typography>
      <div>
        {props.labelArray.map((label, key) => {
          return <CheckBoxText onChange={props.onChange} label={label} key={key} />
        })}
      </div>
    </Grid>
  )
}