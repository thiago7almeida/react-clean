import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../tests/mock-http-client'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = '_any_url'
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
