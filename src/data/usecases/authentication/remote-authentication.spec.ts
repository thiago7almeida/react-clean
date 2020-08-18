import faker from 'faker'
import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../tests/mock-http-client'
import { mockAuthentication } from '../../../domain/tests/mock-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    const authenticantionParams = mockAuthentication()
    await sut.auth(authenticantionParams)
    expect(httpPostClientSpy.body).toEqual(authenticantionParams)
  })
})
