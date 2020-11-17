import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'bridge/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: 'bridge/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: 'bridge/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: 'bridge/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: 'bridge/update',
    method: 'post',
    data
  })
}
