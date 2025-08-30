import styles from "./SearchBar.module.css";

function SearchBar(props) {

    return (
        <div className={styles.SearchBar}>
            <div className={styles.sortOptions}>
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>
            <div className={styles.searchInputs}>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <div className={styles.searchButton}>
                <button>Let's Go</button>
            </div>
        </div>)
}

export default SearchBar;