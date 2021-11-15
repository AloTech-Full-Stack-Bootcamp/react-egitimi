// Serialize JSON body and query params with fetch:
body = JSON.stringify(body);
query = new URLSearchParams(query).toString();

const res = await fetch("/myendpoint?" + query, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body,
});

// Serialize JSON body and query params with axios:
await axios.post("/myendpoint", { params: query, body });
