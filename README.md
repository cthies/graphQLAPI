# GraphQl MongoDB

Create account on mongodb.com
https://mongodb.com/atlas/database

Click "Build a Database"
Select "Free" option

Create user
Add Username and password
Choose region for AWS

Connect: Connect your application
Copy the credentials from application code to .env in root directory
MONGODB_USERNAME="USERNAME"
MONGODB_PASSWORD="PASSWORD"

mongoose.connect URL should look like this:
const MONGODB = "mongodb+srv://USERNAME:PASSWORD@cluster0.ve9hms1.mongodb.net/?retryWrites=true&w=majority";


## Start project
npm start

http://localhost:5000/


### CREATE

Operation
`
mutation  CreateRecipe($recipeInput: RecipeInput) {
    createRecipe (recipeInput: $recipeInput){
        name
        description
        createdAt
        thumbsUp
        thumbsDown
    }
}
`

Variables
`
{
    "recipeInput": {
        "name": "YOUR TITLE",
        "description": "YOUR DESCRIPTION"
    }
}
`


### Edit
Operation
`
mutation EditRecipe($id: ID!, $recipeInput: RecipeInput) {
  editRecipe(ID: $id, recipeInput: $recipeInput)
}
`
Variables
`
{
  "id": "64245e28f2b106df6b9f5662",
  "recipeInput": {
    "description": "edited",
    "name": "Thanksgiving"
  }
}
`

### Get single
Operation
`
query Recipe($id: ID!) {
  recipe(ID: $id) {
    name
    description
  }
}
`
Variables
`
{
  "id": "64245ffaf2b106df6b9f5666"
}
``

### GET List
`
query GetRecipes($amount: Int) {
  getRecipes(amount: $amount) {
    createdAt
    description
    name
    thumbsDown
    thumbsUp
  }
}
`
Variables
`
{
  "amount": 2
}
`
