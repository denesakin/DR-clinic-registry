# clinic-registry
The clinic registry component retrieves clinic data from the following registry: https://raw.githubusercontent.com/feldob/dit355_2020/master/dentists.json . Once this data is retrieved, it is compared to the database – if there is a difference, the database is updated. If there is no change, the database will not be changed. This process runs in an automated manner, and occurs on start-up of the component, and then it runs every minute. 

The main responsibility of this component is to ensure that the database contains the most updated clinic data.
