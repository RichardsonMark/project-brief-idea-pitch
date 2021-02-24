import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleReadingList from '../components/articles/ArticleReadingList';
import ArticleReadingDetail from '../components/articles/ArticleReadingDetail';
import Request from '../helpers/request';
import { Grid, Button, Paper, Box, TextField, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import ArticleReading from '../components/articles/ArticleReading';
import usePagination from "../helpers/Pagination";



const ArticlesReadingContainer = () => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);


    const requestAll = function () {
        const request = new Request();
        const articlePromise = request.get('http://localhost:8080/api/articles/read')

        Promise.all([articlePromise])
            .then((data) => {
                setArticles(data[0]);
                // console.log(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])


    useEffect(() => {
        setFilteredArticles(
            articles.filter((article) =>
                article.categoryLeague.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, articles]);
    // console.log(articles);


    // Material-ui pagination
    let [page, setPage] = useState(1);
    const PER_PAGE = 7;
  
    const count = Math.ceil(filteredArticles.length / PER_PAGE);
    const _DATA = usePagination(filteredArticles, PER_PAGE);
  
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };


    if (!articles) {
        return null
    }
    return (
        <>
            {/* <h1>Read Articles</h1> */}
            <Grid >
            <Container fixed>

                {/* <Box elevation={3}> */}
                    <div>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="filter by category/league" variant="outlined" fullWidth onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>
                {/* </Box> */}
                {/* <Grid container spacing={0}> */}
                    <Paper elevation={3}>
                        {_DATA.currentData().map((article) => (
                            <>
                                 {/* <ul> */}
                                    {/* <li key={article.id} className="component-item">
                                <div className="component"> */}
                                    <ArticleReading article={article} />
                                {/* </div>
                                    </li> */}
                                {/* </ul> */}
                            </>
                        ))}
                    </Paper>
                {/* </Grid> */}
                <Paper elevation={3}>
                <Pagination count={count} color="primary" shape="rounded" size="large" showFirstButton showLastButton page={page} onChange={handleChange} />
                </Paper>
                </Container>
            </Grid>
        </>
    )
}

export default ArticlesReadingContainer;