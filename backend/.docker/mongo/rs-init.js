rs.initiate( {
    _id : "rs0",
    members: [
        { _id: 0, host: "mongo:27017", priority: 100 },
        { _id: 1, host: "mongo-1:27017",priority: 50 },
        { _id: 2, host: "mongo-2:27017",priority: 50 }
    ]
});
