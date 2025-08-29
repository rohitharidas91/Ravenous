# Ravenous Part 1: Creating Project & Components

-----

### **Overview**

Ravenous is a restaurant recommendation web application that helps users find local businesses. This project replicates core functionalities of Yelp using React, HTML, CSS, and JavaScript. This `README.md` documents the first part of the project, which establishes the foundational, static user interface for the application.

-----

### **Features**

  * **Static Homepage:** The app's initial version features a static homepage that includes a header, a search bar, and a list of mock businesses.
  * **Search Bar:** A functional search bar allows users to simulate a search by typing in terms and a location.
  * **Business List:** The application displays a list of mock business data, showcasing how search results will be formatted.
  * **UI Components:** Key components like `Business`, `BusinessList`, and `SearchBar` are created and styled to provide a visually appealing and organized interface.

-----

### **Technologies Used**

  * **React:** The primary library used for building the user interface.
  * **JavaScript (ES6+):** For the application's logic and interactivity.
  * **HTML:** For the structure of the web pages.
  * **CSS:** For styling the components, using CSS modules to scope styles.
  * **Git & GitHub:** Used for version control and hosting the project repository.

-----


### **Project Structure**

The project is organized into modular components to ensure reusability and maintainability.

  * **`src/components/`**: This directory contains the main React components:
      * **`Business/`**: The `Business` component represents a single business entry, displaying its image, name, address, category, rating, and review count.
      * **`BusinessList/`**: The `BusinessList` component renders a collection of `Business` components.
      * **`SearchBar/`**: The `SearchBar` component contains the input fields and sorting options for searching.

-----

### **Future Work**

This project serves as a static foundation. Future development will focus on the following features:

  * **Yelp API Integration:** Connecting the application to the Yelp API to fetch and display real-time business data.
  * **Dynamic Search Functionality:** Implementing the ability for the `SearchBar` to dynamically query the Yelp API based on user input.
  * **Sorting and Filtering:** Adding logic to the sorting options (e.g., "Best Match," "Highest Rated") to refine search results.
  * **User Interface Enhancements:** Improving the overall user experience with additional styling, animations, and responsive design.