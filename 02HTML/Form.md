

## 🔹 Form Validation

###  Key Concepts

- required attribute → ensures the field is not empty before submitting.

#### method="GET"
- Appends form data to the URL.
- Less secure.
- Used for data retrieval/search queries.

#### method="POST"
- Sends form data in the request body.
- More secure.
- Used for submitting sensitive or large amounts of data.

- action="/submit" → defines the server endpoint that will process the data.

- Always validate:
  - Client-side: using HTML or JavaScript (for user feedback).
  - Server-side: for security and data integrity.

###  Example Form

```
html
<form method="POST" action="/submit">
  <input type="text" name="username" required />
  <input type="submit" value="Submit" />
</form>
```
