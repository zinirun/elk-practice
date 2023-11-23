# URI 검색
GET books/_search?q=value

# 여러 검색어 검색
GET books/_search?q=value AND three

# 필드명 지정하여 검색
# 검색은 항상 필드를 지정하는 것이 좋음
GET books/_search?q=field:value

# 데이터 본문(body) 검색
GET books/_search
{
  "query": {
    "match": {
      "field": "value"
    }
  }
}

# Multitenancy 검색 (여러 인덱스 한번에 검색)
# 시간순으로 쌓이는 로그 데이터에 유용 (일단위로 구분하는 것이 좋음)
# 쉼표 나열
GET logs-2018-01,2018-02,2018-03/_search

# 와일드카드
# _all 도 사용할 수 있지만 클러스터의 시스템 인덱스까지 사용하므로 사용 X
GET logs-2018-*/_search