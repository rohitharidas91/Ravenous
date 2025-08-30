import styles from "./SearchBar.module.css";

function SearchBar(props) {

    return (
        <div className={styles.SearchBar}>
            <div className={styles.sortOptions}>
                <button
                    className={props.sortBy === 'best_match' ? styles.active : ''}
                    onClick={() => props.setSortBy('best_match')}
                >
                    Best Match
                </button>
                <button
                    className={props.sortBy === 'rating' ? styles.active : ''}
                    onClick={() => props.setSortBy('rating')}
                >
                    Highest Rated
                </button>
                <button
                    className={props.sortBy === 'review_count' ? styles.active : ''}
                    onClick={() => props.setSortBy('review_count')}
                >
                    Most Reviewed
                </button>
            </div>
            <div className={styles.searchInputs}>
                <input
                    type="text"
                    placeholder="Search Businesses"
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Where?"
                    value={props.location}
                    onChange={(e) => props.setLocation(e.target.value)}
                />
            </div>
            <div className={styles.searchButton}>
                <button
                    onClick={() => {
                        props.setQuery({
                            search: props.search,
                            location: props.location,
                            sortBy: props.sortBy
                        });
                        console.log('Current query:', {
                            search: props.search,
                            location: props.location,
                            sortBy: props.sortBy
                        });
                    }}
                >Let's Go</button>
            </div>
        </div>)
}

export default SearchBar;