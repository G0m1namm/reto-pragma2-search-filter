import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, IconButton, InputBase } from '@material-ui/core';

//Assets
import { ReactComponent as IcoSearch } from '../../../assets/icons/IcoSearch.svg' 
import { ReactComponent as IcoClose } from '../../../assets/icons/IcoClose.svg' 


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
})
const CustomInput = ({handleChange, handleSearch, handleClear, value}) => {
    const classes = useStyles()
    return(
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="search" onClick={handleSearch}>
                <IcoSearch />
            </IconButton>
            <InputBase
                className={classes.input}
                value={value}
                placeholder="Busca un Cóctel"
                inputProps={{ 'aria-label': 'Busca un Cóctel', style: {fontFamily: "Raleway, sans-serif"} }}
                onChange={handleChange}
            />
            {value &&
                <IconButton type="button" onClick={handleClear} className={classes.iconButton} aria-label="close">
                    <IcoClose />
                </IconButton>
            }
        </Paper>
    )
}

export default CustomInput