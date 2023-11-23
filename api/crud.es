GET books
{
  "query": {
    "match_all": {}
  }
}

# create or update
PUT books/_doc/1
{
  "title": "Book 1",
  "price": 10000,
  "author": "Author 1"
}

# update하지 않고 create (중복시 에러 발생)
PUT books/_create/1
{
  "title": "Book 1",
  "price": 10000,
  "author": "Author 1"
}

# update
POST books/_update/1
{
  "doc": {
    "title": "Book Title 1"
  }
}

# document 조회
GET books/_doc/1

# document 삭제
DELETE books/_doc/1

# index 삭제
DELETE books

# bulk
POST _bulk
{"index":{"_index":"books", "_id":"1"}}
{"field":"value one"}
{"index":{"_index":"books", "_id":"2"}}
{"field":"value two"}
{"delete":{"_index":"books", "_id":"2"}}
{"create":{"_index":"books", "_id":"3"}}
{"field":"value three"}
{"update":{"_index":"books", "_id":"1"}}
{"doc":{"field":"value two"}}

# 파일 저장 내용 실행
# $ curl -XPOST "http://localhost:9200/_bulk" -H 'Content-Type: application/json' --data-binary @bulk.json