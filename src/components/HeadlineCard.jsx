// import { useParams, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const HeadlineCard = (props) => {
//     const { headline } = props

//     const { id } = useParams();
//     const headlineData = headline[id]

//     let text = headlineData.fields.bodyText;
//     text = text.replaceAll(".", "\n");

//     return (
//         <div className="newsBody">
//             <img src={headlineData.fields.thumbnail} alt={headlineData.fields.headline} />
//             <Link target="_blank" rel="noopener noreferrer" to={headlineData.fields.webUrl}>
//                 <h2>{headlineData.fields.headline}</h2>
//             </Link>

//             <p className="card-text">{text}</p>
//         </div>
//     )
// };

// HeadlineCard.propTypes = {
//     headline: PropTypes.arrayOf(
//         PropTypes.shape({
//             fields: PropTypes.shape({
//                 bodyText: PropTypes.string,
//                 thumbnail: PropTypes.string,
//                 headline: PropTypes.string,
//                 webUrl: PropTypes.string,
//             }).isRequired,
//         })
//     ).isRequired,
// };

// export default HeadlineCard;