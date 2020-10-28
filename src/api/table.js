import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'bridge/list',
    method: 'get',
    params
  })
}
