import Container from '@material-ui/core/Container';
import { Link, Paper } from '@material-ui/core';

const ArticleReading = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/read/" + article.id;

    return (
        <Container>
            <Paper elevation={3}>
                <h1><Link href={url} className="name">
                    {article.headline}
                </Link></h1>
                <p>posted: {article.date}</p>
                <p>{article.lede}</p>
                <p>{article.mainStory}</p>
            </Paper>
        </Container>
    )
}

export default ArticleReading;