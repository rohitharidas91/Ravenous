import styles from './BusinessList.module.css';
import Business from '../Business/Business';

function BusinessList(props) {

    return(
        <div className={styles.container}>
            {props.businesses.map((business, index) => (
                <Business 
                    key={business.id || index}
                    business={business} />
            ))}
        </div>
    )

}


export default BusinessList;