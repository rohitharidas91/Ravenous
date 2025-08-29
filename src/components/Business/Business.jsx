import styles from './Business.module.css'

function Business(props) {
    
    return(
        <div className={styles.container}>
            <div className={styles.businessImg}>
                <img src={props.businesses.image} alt="An Image of Food" />
            </div>
            <div className={styles.businessName}>
                <h3>{props.businesses.name}</h3>
            </div>
            <div className={styles.businessInfo}>
                <address className={styles.address}>
                    <p>{props.businesses.address}</p>
                    <p>{props.businesses.city}</p>
                    <p>{`${props.businesses.state} ${props.businesses.zipcode}`}</p>
                </address>
                <div className={styles.rating}>
                    <p>{props.businesses.category.toUpperCase()}</p>
                    <p>{`${props.businesses.rating} stars`}</p>
                    <p>{`${props.businesses.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;