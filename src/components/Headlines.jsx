import PropTypes from 'prop-types';

const Headlines = ({ headlines }) => {

    if (!headlines || headlines.length === 0) {
        return <div>Please wait a moment...</div>
    }
    const newsHeadlines = headlines.map((newsData) => (
        <div key={newsData.id}>
            <h2>{newsData.fields.headline}</h2>
            <img src={newsData.fields.thumbnail} alt={`Thumbnail ${newsData.id}`} />
        </div>
    ));

    return (
        <div>
            {newsHeadlines.length > 0 ? newsHeadlines : <div>Page is loading</div>}
        </div>
    );
};

Headlines.propTypes = {
    headlines: PropTypes.array,
};

export default Headlines;

