import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export function PhotoUpload() {
    return (
        <Box
            component="span"
            sx={{
                p: 10,
                border: '2px dashed grey',
            }}
        >
            <Button>
                <AddPhotoAlternateIcon />
            </Button>
        </Box>
    );
}
