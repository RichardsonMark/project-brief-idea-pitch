import { useState, useEffect } from "react";
import Request from '../helpers/request';
import { Grid, Paper, TextField, Container } from '@material-ui/core';
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
    const PER_PAGE = 6;

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
            <Grid >
                <Container fixed>
                    <div>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="filter by category/league" variant="outlined" fullWidth onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>

                    <Paper elevation={3}>
                        {_DATA.currentData().map((article) => (
                            <>
                                <ArticleReading article={article} />

                            </>
                        ))}
                    </Paper>

                    <Paper elevation={3}>
                        <Pagination count={count} color="primary" shape="rounded" size="large" showFirstButton showLastButton page={page} onChange={handleChange} />
                    </Paper>
                </Container>
            </Grid>
        </>
    )
}

export default ArticlesReadingContainer;