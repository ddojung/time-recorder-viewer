export interface PutDisableExpiredFuseToVacationReqParam {
  params: {
    group_id: string;
  };
  body: {
    expireDate: string;
    expireNote: string;
  };
}
