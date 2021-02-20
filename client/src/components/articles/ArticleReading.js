import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const ArticleReading = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/read/" + article.id;

    return (
        <Container>
            <h1><Link href={url} className="name">
                {article.headline}
            </Link></h1>
            <p>posted: {article.date}</p>
            <p>{article.lede}</p>
            <p>{article.mainStory}</p>
        </Container>
    )
}

export default ArticleReading;