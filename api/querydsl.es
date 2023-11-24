# Query DSL - Full Text Query
# 예제 데이터 삽입
POST my_index/_bulk
{"index":{"_id":1}}
{"message":"The quick brown fox"}
{"index":{"_id":2}}
{"message":"The quick brown fox jumps over the lazy dog"}
{"index":{"_id":3}}
{"message":"The quick brown fox jumps over the quick dog"}
{"index":{"_id":4}}
{"message":"Brown fox brown dog"}
{"index":{"_id":5}}
{"message":"Lazy jumping dog"}

# match_all
# 모든 도큐먼트 검색
GET my_index/_search

# match
# 가장 일반적인 쿼리, 포함되어 있는 문서 검색
GET my_index/_search
{
  "query": {
    "match": {
      "message": "dog"
    }
  }
}

# 여러 검색어를 넣으면 디폴트 OR 조건
GET my_index/_search
{
  "query": {
    "match": {
      "message": "quick dog"
    }
  }
}

# AND 조건으로 검색
GET my_index/_search
{
  "query": {
    "match": {
      "message": {
        "query": "quick dog",
        "operator": "and"
      }
    }
  }
}

# match_phrase
# 공백을 포함해 정확히 일치하는 내용 검색
GET my_index/_search
{
  "query": {
    "match_phrase": {
      "message": "lazy dog"
    }
  }
}

# slop 옵션: 단어 사이에 다른 검색어가 몇 개 끼어들 수 있는지
# slop을 너무 크게하면 검색 범위가 넓어져 관련 없는 결과가 나타날 확률 높음
GET my_index/_search
{
  "query": {
    "match_phrase": {
      "message": {
        "query": "lazy dog",
        "slop": 1
      }
    }
  }
}

# query_string
# URL검색에 사용하는 루씬 문법을 본문 검색에 이용하고 싶을 때
GET my_index/_search
{
  "query": {
    "query_string": {
      "default_field": "message",
      "query": "(jumping AND lazy) OR \"quick dog\""
    }
  }
}