```javascript
// Correct usage of $inc operator with handling of missing fields
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc: {
    field:value
  }
});
db.collection.updateOne({"_id":ObjectId("someId")},{
 $set: {
   field:{$inc:[{$ifNull:["$field",0]},value]}
 }
});
```