import styles from './Business.module.css'

function Business(props) {
    
    return(
        <div className={styles.container}>
            <div className={styles.businessImg}>
                <img src={props.business.image} alt="An Image of Food" />
            </div>
            <div className={styles.businessName}>
                <h3>{props.business.name}</h3>
            </div>
            <div className={styles.businessInfo}>
                <address className={styles.address}>
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{`${props.business.state} ${props.business.zipcode}`}</p>
                </address>
                <div className={styles.rating}>
                    <p>{props.business.category.toUpperCase()}</p>
                    <p>{props.business.rating} stars</p>
                    <p>{props.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;