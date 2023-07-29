import './Headlines.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Headlines = ({ headlines }) => {

    const newsHeadlines = headlines.map((newsData) => (
        <div key={newsData.id} className="card mb-4">
            <img src={newsData.fields.thumbnail} alt={`Thumbnail ${newsData.id}`} className="card-img-top" />
            <div className="card-body" >
                <Link to={`/article/${newsData.id}`}>{newsData.fields.headline}</Link>
            </div>
        </div>
    ));

    return (
        <div className="headlines-container">
            {newsHeadlines.length > 0 ? newsHeadlines : <div>Please wait a moment...</div>}
        </div>
    );
};

Headlines.propTypes = {
    headlines: PropTypes.array.isRequired,
};

export default Headlines;
