import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="animate-character" data-testid="header">{title}</h3>
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
