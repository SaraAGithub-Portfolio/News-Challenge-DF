import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeadlineCard = (props) => {
    const { headline } = props

    const { id } = useParams();
    const headlineData = headline[id]

    let text = headlineData.fields.headlineCard;
    text = text.replaceAll(".", "\n");

    return (
        <div className="headlineCard">
            <img src={headlineData.fields.thumbnail} alt={headlineData.fields.headline} />
            <p className="card-text">{text}</p>
        </div>
    )
};

HeadlineCard.propTypes = {
    headline: PropTypes.arrayOf(
        PropTypes.shape({
            fields: PropTypes.shape({
                headlineCard: PropTypes.string,
                thumbnail: PropTypes.string,
                headline: PropTypes.string,
            }).isRequired,
        })
    ).isRequired,
};

export default HeadlineCard;