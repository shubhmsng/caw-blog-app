import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';

function CardComponent({title, body, email, id, clickable}) {
    return (
        <Card className="card" style={email && {margin: "10px", maxWidth: "100%"}}>
            <div className="card-container">
                {
                    clickable ?
                    <Link
                    target="_blank"
                    key={ "link-" + id }
                    to={ { pathname: "/" + id } }>
                        <CardContent>
                            <h4 aria-label="blog title">{title}</h4>
                            <p className="content" aria-label="message">{body}</p>
                        </CardContent>
                    </Link>
                    :
                    <CardContent>
                        <h4 aria-label="blog title">{title}</h4>
                        {email && <a href={`mailto:${email}`}>{email}</a>}
                        <p className="content" aria-label="message">{body}</p>
                    </CardContent>
                }
            </div>
        </Card>
    );
}

export default React.memo(CardComponent);