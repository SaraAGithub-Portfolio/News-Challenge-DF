import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../../Utils/dataservice';

const ArticleSummary = () => {
    const [summary, setSummary] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getArticle = async () => {
            const data = await getArticleById(id);
            setSummary(data);
        };
        getArticle();
    }, [id]);

    if (!summary) return 'Loading...';

    let text = summary.fields.bodyText;
    text = text.replaceAll(".", ".\n")

    return (
        <div className="bodyText">
            <img src={summary.fields.thumbnail} alt={summary.fields.headline} />
            <Link target="_blank" rel="noopener noreferrer" to={summary.webUrl}><h2>{summary.fields.headline}</h2></Link>
            <p className="articleText">{text}</p>
        </div>
    )
}

export default ArticleSummary;
