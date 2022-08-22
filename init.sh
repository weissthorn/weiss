mkdir src/public/storage

curl \
  -X POST 'http://localhost:2323/api/category/create' \
  -H 'Content-Type: application/json' \
  -H 'apikey: d364d3-2c66-4dbc-8100-83ef7f9b80a9b' \
  --data-binary '{
      "title: "General",
      "description": "General category for all discussions",
      "color": "#000000",
      "slug": "general"
    }'
