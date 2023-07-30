import './Headlines.css';
import PropTypes from 'prop-types';

const Headlines = ({ headlines }) => {

    const newsHeadlines = headlines.map((newsData) => (
        <div key={newsData.id} className="card mb-4">
            <img src={newsData.fields.thumbnail} alt={`Thumbnail ${newsData.id}`} className="card-img-top w-5" />
            <div className="card-body" >
                <h2 className="card-title">{newsData.fields.headline}</h2>
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
