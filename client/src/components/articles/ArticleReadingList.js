import ArticleReading from './ArticleReading.js';
import { Container, Paper, FormControl, Button, TextField, Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';


const ArticleReadingList = ({articles}) => {

	

	if (articles.length === 0){
	  return (<p>Loading...</p>)
	}

	const articlesNodes = articles.map((article, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <ArticleReading article={article} />
	    </div>
	    </li>
	  )
	})

	return (
		<Container>
			{/* <h2>Click headline to read article</h2> */}
			<Box>
				<Paper elevation={3}>
					<div >
						<form noValidate autoComplete="off">
							<TextField id="outlined-basic" label="search" variant="outlined" size="small" />
							<Button variant="outlined">Search articles</Button>
						</form>
					</div>
				</Paper>
			</Box>
			<ul className="component-list">
				{articlesNodes}
			</ul>
			<Paper elevation={3}>
                <Pagination count={10} />
                </Paper>
		</Container>
	)
}
 export default ArticleReadingList;