// import {Link} from 'react-router-dom';
import { Container, Link, Paper, Button } from '@material-ui/core';

const Article = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/" + article.id;

    return (
        <Button href={url}>
            <Paper variant="outlined" elevation={3} >
            {/* <h1><Link href={url} className="name">
                {article.headline}
            </Link></h1> */}
            <h1>{article.headline}</h1>
            <p>posted: {article.date}</p>
            <p>{article.lede}</p>
            <p>{article.mainStory}</p>
            </ Paper>
        </Button>
    )
}

export default Article;