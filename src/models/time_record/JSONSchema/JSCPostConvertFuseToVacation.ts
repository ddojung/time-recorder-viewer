import { IJSONSchemaType } from '../../common/IJSONSchemaType';

export const JSCPostConvertFuseToVacation: IJSONSchemaType = {
  description: '초과 근무로 휴가를 만든다',
  properties: {
    params: {
      properties: {
        group_id: {
          type: 'string'
        }
      },
      required: ['group_id']
    },
    body: {
      properties: {
        expireDesc: {
          type: 'string'
        },
        note: {
          type: 'string'
        },
        auth_id: {
          type: 'string'
        }
      },
      required: ['expireDesc', 'note', 'auth_id']
    }
  },
  required: ['params', 'body']
};
