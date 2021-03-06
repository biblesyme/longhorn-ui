import { request } from '../utils'

export async function query(params) {
  return request({
    url: '/v1/backupvolumes',
    method: 'get',
    data: params,
  })
}

export async function execAction(url, params) {
  return request({
    url,
    method: 'post',
    data: params,
  })
}

export async function restore(params) {
  return request({
    url: '/v1/volumes',
    method: 'post',
    data: {
      ...params,
      staleReplicaTimeout: 20,
    },
  })
}

export async function deleteBackup(payload) {
  return request({
    url: `/v1/backupvolumes/${payload.volumeName}?action=backupDelete`,
    method: 'post',
    data: {
      name: payload.name,
    },
  })
}
