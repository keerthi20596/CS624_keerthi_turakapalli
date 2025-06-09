Input
The app allows users to add Cities and Countries with their corresponding information:

For Cities, users input:

        City name

        Country name

For Countries, users input:

        Country name

        Currency name

(Currency used: hardcoded as true for now)

Users can tap on a City or a Country to view additional information.

Process
The app uses Tab Navigation with the following tabs:

CitiesNav (Stack)

Displays list of Cities

        Allows adding Locations for each City

        AddCity

        Allows adding new Cities

        AddCountry

        Allows adding new Countries

CountriesNav (Stack) — added for PE06

Displays list of Countries

Allows tapping on a Country to view Country screen with Currency details

Both CitiesNav and CountriesNav use Stack Navigators to navigate between list and detail screens.

The app stores Cities and Countries in component state (App.js).

Output
Cities tab displays a list of saved Cities. Tapping a City shows its Locations and allows adding new ones.

AddCity tab allows adding a new City.

AddCountry tab allows adding a new Country.

Countries tab (CountriesNav) displays a list of saved Countries.
Tapping on a Country navigates to the Country screen, which shows:

    Country name

    Currency name

    Currency used: Yes / No