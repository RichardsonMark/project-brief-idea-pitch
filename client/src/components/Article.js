// import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Article = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/" + article.id;

    return (
        <Container>
            <h1><Link href={url} className="name">
                {article.headline}
            </Link></h1>
            <p>{article.date}</p>
            <p>{article.lede}</p>
            <p>{article.mainStory}</p>
        </Container>
    )
}

export default Article;