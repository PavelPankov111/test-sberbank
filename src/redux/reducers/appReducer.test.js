/**
 * @jest-environment jsdom
*/
import { appReducer } from "./appReducer";
import { sendRequest } from '../actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { SEND_REQUEST, SET_RESPONSE } from '../types';
import { render } from '@testing-library/react'
import { SuccessfulForm } from '../../components/SuccessfulForm/SuccessfulForm'
import React from 'react'

describe('testing app reducer', () => {

    describe('testing request', () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)

        const store = mockStore({
            request: true,
            response: false,
        })

        it('test sending request', () => {
            fetchMock.getOnce(`http://jsonplaceholder.typicode.com/posts?_limit=5`, {
                headers: { 'content-type': 'application/json' },
                body: [{ }, { }, { }]
            })

            const expectedActions = [
                {
                    type: SEND_REQUEST,
                },
                {
                    type: SET_RESPONSE,
                },
            ]

            return store.dispatch(sendRequest({ })).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })

        it('testing render sucsessfful page', () => {
            const { container } = render(<SuccessfulForm />)
            expect(container.getElementsByClassName('successfulForm_opened').length).toBe(1)
        })
    })

    it('should return the initial state', () => {
        const initState = {
            request: true,
            response: false,
        };

        expect(appReducer(undefined, { })).toEqual(initState)
    })
})