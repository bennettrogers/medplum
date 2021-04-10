# medplum-server

## Configuration

### Repository

A repository is responsible for storing and retrieving data.  It must be able to perform the following operations:

* Create
* Read
* Update
* Delete
* Read by version
* Read all history
* Search

A repository can be separated into "Storage" and "Search".

MedPlum currently has two implementations:

* "memory" - In-memory storage.  Fast and good for testing.  All data is lost when the server stops.
* "mongodb" - MongoDB storage.  Compatible with AWS DocumentDB, Azure Cosmos, and Google Cloud MongoDB Atlas.

### Security

MedPlum current has two implementations:

* "embedded" - Use the FHIR repository for storage.  Use the server itself for OAuth2 and SMART-on-FHIR.
* "remote" - Use a remote OAuth2 server.  Compatible with AWS Cognito and Auth0.

Launch URL's:

* Redirect URI: http://localhost:4567/inferno/oauth2/static/redirect
* Launch URI: http://localhost:4567/inferno/oauth2/static/launch
* Launch URI: http://localhost:4567/inferno/oauth2/static/launch

Launch parameters:

* "iss" - Issuer, must be full FHIR base URL
* "state" - Must be unique random state

http://localhost:4567/inferno/oauth2/static/launch?iss=http%3A%2F%2Fhost.docker.internal%3A5000%2Ffhir%2FR4&launch=xyz1234

## Maven Cheatsheet

| Task                          | Command                                                      |
| ----------------------------- | ------------------------------------------------------------ |
| Clean                         | `mvn clean`                                              |
| Build                         | `mvn build`                                              |
| Replicate Jenkins build       | `mvn clean install site`                                 |
| Show all dependencies         | `mvn dependency:tree`                                    |
| Analyze unused dependencies   | `mvn dependency:analyze`                                 |
| Check for dependency updates  | `mvn versions:display-dependency-updates`                |
| Check for plugin updates      | `mvn versions:display-plugin-updates`                    |
| Sort pom.xml files            | `mvn com.github.ekryd.sortpom:sortpom-maven-plugin:sort` |

## TODO:

* Auth
* Compartment access controls
* Batch processing
* Bundle transactions
* Binary/blob storage
* Reference integrity
* Synthea support
* Inferno support
* SMART-on-FHIR
* [UDAP](https://www.udap.org/)
* Version Mapping

## Blog posts

* Naming conventions
* Domain conventions
* Dependencies
* Security review
* Pen test
* OpenID compliance
* FHIR/Inferno compliance
* DICOM FDA application