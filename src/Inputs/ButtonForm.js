import Button from '@mui/material/Button';

const ButtonForm = (props) => // added "form" to the page name cause it made a conflict with "Button" from Material UI
{
    return (
        <Button 
            type="submit" 
            variant="contained" 
            fullWidth={props.json.fullWidth ? true : false}
            sx={props.json.sx}>{props.json.title}</Button>
    )
}

export default ButtonForm;