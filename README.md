# Spin up
1. npn install
2. npm run dev
3. http://locoalhost:3000
# Import database(need to mongoDB)
1. mongodb://localhost:27017/blogDb
# Test API in postman
## localhost:3000/users/add
params: `{"id":"9","username":"foo","pwd":"123456","auth":"2"}`
## localhost:3000/find
## localhost:3000/article/add
params: `{"id":"1","title":"foo","createTime":"2024.12.12 12:12:12","read":"222","star":"2","comment":"29","author":"bar"}`
## localhost:3000/findOne?id=1

