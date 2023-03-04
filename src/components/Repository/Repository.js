import React from 'react';
import {
    styled,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Link,
} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../Spinner';
import Skeleton from './Skeleton';

const Container = styled('div')({
    marginTop: '3%',
});

const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const RightMargin = styled('div')({
    marginRight: '4%',
    display: 'flex',
});
function Repository({ repository, isLoading, error }) {
    const skeleton = repository || isLoading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = !(isLoading || error || !repository) ? (
        <View repository={repository} />
    ) : null;
    return (
        <Container>
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </Container>
    );
}

const View = ({ repository }) => {
    const {
        full_name,
        name,
        description,
        language,
        html_url,
        owner,
        stargazers_count,
        forks_count,
    } = repository;
    const { login, html_url: owner_url } = owner;
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography
                        color="text.primary"
                        variant="h3"
                        title="Name of repository"
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{ fontSize: '12px' }}
                        color="text.secondary"
                        variant="h3"
                        title="Full name of repository"
                        marginBottom={'1%'}
                    >
                        {full_name} Owner:
                        <Link href={owner_url} target="_blank" size="small">
                            {login}
                        </Link>
                    </Typography>
                    <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
                        Description:
                    </Typography>
                    <Typography variant="p" component="div" gutterBottom>
                        {description}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '17px',
                            fontWeight: 'bold',
                            marginBottom: '4%',
                        }}
                        gutterBottom
                    ></Typography>
                    <FlexContainer>
                        <RightMargin>
                            <Typography
                                variant="p"
                                component="div"
                                gutterBottom
                            >
                                Written on {language}
                            </Typography>
                        </RightMargin>

                        <RightMargin>
                            <StarIcon />
                            <Typography>{stargazers_count} </Typography>
                        </RightMargin>
                        <Typography>Forks {forks_count} </Typography>
                    </FlexContainer>
                </CardContent>
                <CardActions>
                    <Button href={html_url} target="_blank" size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Repository;
