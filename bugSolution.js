```javascript
function findDocuments(field, values) {
  if (Array.isArray(values) && values.length > 0) {
    return db.collection.find({ field: { $in: values } });
  } else {
    // Handle empty array case appropriately
    return []; // Or throw an error, or use a different query strategy
  }
}
```