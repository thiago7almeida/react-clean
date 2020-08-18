export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unathorized = 401,
  notFound = 404,
  serveError = 500,
}
export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
