import './Gif.css'
import { Link } from 'react-router-dom'

const Gif = ({ title, id, url }) => {

    return (
        <div className="Gif">
            <Link to={`/gif/${id}`}>
                <h5>{title}</h5>
                <img loading="lazy" src={url} alt={title} />
            </Link>
        </div>
    );

}

export default Gif;