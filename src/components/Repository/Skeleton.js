import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function Skeleton() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    color="text.primary"
                    variant="h5"
                    title="Name of repository"

                >
                    Please enter name of repository
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Skeleton;