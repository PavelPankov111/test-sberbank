import { validationReducer } from "./validationReducer";
import { globalError, globalErrorOn, globalErrorOff, nameErrorOn, nameErrorOff, nameError, emailErrorOn, emailError, emailErrorOff } from "../actions";

describe("testing validationReducer", () => {
    it('testing global error', () => {
        const initState = {
            globalError: "",
            globalStatus: false,
        };

        const reducer = (action) => validationReducer(initState, action)

        expect(reducer(globalError('Глобальная ошибка')).globalError).toBe('Глобальная ошибка')
        expect(reducer(globalErrorOn()).globalStatus).toBeTruthy()
        expect(reducer(globalErrorOff()).globalStatus).toBeFalsy()
    })

    it('testing name error', () => {
        const initState = {
            nameError: "",
            nameErrorStatus: false,
        };

        const reducer = (action) => validationReducer(initState, action)

        expect(reducer(nameError('Ошибка имени')).nameError).toBe('Ошибка имени')
        expect(reducer(nameErrorOn()).nameErrorStatus).toBeTruthy()
        expect(reducer(nameErrorOff()).nameErrorStatus).toBeFalsy()
    })

    it('testing email error', () => {
        const initState = {
            emailError: "",
            emailErrorStatus: false,
        };

        const reducer = (action) => validationReducer(initState, action)

        expect(reducer(emailError('Ошибка email')).emailError).toBe('Ошибка email')
        expect(reducer(emailErrorOn()).emailErrorStatus).toBeTruthy()
        expect(reducer(emailErrorOff()).emailErrorStatus).toBeFalsy()
    })

    it('should return the initial state', () => {
        const initState = {
            globalError: "",
            globalStatus: false,
            nameError: "",
            nameErrorStatus: false,
            emailError: "",
            emailErrorStatus: false,
        };

        expect(validationReducer(undefined, { })).toEqual(initState)
    })
});
