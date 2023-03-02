import React from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';

import Search from './Search';
import Repository from './Repository/Repository';
function App({ language, repository, isLoading, error }) {
    return (
        <div className="App">
            <Grid container justifyContent="center" marginTop={'3%'}  >
                <Grid item lg={6} sm={9} xs={11}>
                    <Search language={language} />
                    <Repository
                        repository={repository}
                        isLoading={isLoading}
                        error={error}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language,
    repository: state.repository,
    isLoading: state.isLoading,
    error: state.error,
});

export default connect(mapStateToProps)(App);
