
import { actions, follow, unfollow } from './users-reducer';
import { usersAPI } from './../api/user-api';
import { ApiResponseType, ResultCodeEnum } from '../api/Api';
jest.mock('./../api/user-api')

const dispatchMock = jest.fn()
const getStateMock = jest.fn()
beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    usersAPIMock.follow.mockClear()
    usersAPIMock.unfollow.mockClear()
})

const result:ApiResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {},
    photos: function (photos: any) {
        throw new Error('Function not implemented.');
    }
}

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>


usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test("success follow thunk",async ()=>{
    const thunk = follow(1)




   await thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.TogleIsFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.TogleIsFollowingInProgress(false,1))
})



test("success unfollow thunk",async ()=>{
    const thunk = unfollow(1)




   await thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.TogleIsFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.unFollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.TogleIsFollowingInProgress(false,1))
})