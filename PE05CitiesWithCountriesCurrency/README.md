Input
The application allows users to input city and country details via the AddCity screen, and country name with currency through the AddCountry screen. Inputs are taken using controlled TextInput components. Each input is validated to ensure fields are not empty before submission.

Process
When a user submits a city or country, the app creates a structured object with relevant fields (e.g., name, currency, ID). These objects are added to the application's local state managed within the main App.js component. The navigation structure is managed using React Navigation, combining stack and tab navigators. For cities, users can also add locations within a selected city.

Output
The Cities and Countries tabs display lists of the added items. Each entry is styled consistently and shown using FlatList or ScrollView components. The app offers a clean and responsive UI, providing immediate feedback by displaying the submitted entries in their respective tabs.