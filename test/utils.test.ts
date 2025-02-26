/**
* @jest-environment jsdom-thirteen
*/
import {
    $,
    isServer,
    detectOS,
    getEventListenerOptions,
} from '@/utils'

describe('utils', () => {

    it('$', () => {
        expect($('body').tagName).toBe('BODY')
    })

    it(`should detect server`, () => {
        expect(isServer()).toBe(false)
    })

    it(`should detect os`, () => {
        const iPad = `Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1`
        const iPhone = `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1`
        const android = `Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Mobile Safari/537.36`

        expect(detectOS().ios).toBe(false)
        expect(detectOS().android).toBe(false)

        expect(detectOS(iPad).ios).toBe(true)
        expect(detectOS(iPad).android).toBe(false)

        expect(detectOS(iPhone).ios).toBe(true)
        expect(detectOS(iPhone).android).toBe(false)

        expect(detectOS(android).ios).toBe(false)
        expect(detectOS(android).android).toBe(true)
    })

    it(`should detect getEventListenerOptions`, () => {
        // @ts-ignore
        expect(getEventListenerOptions).toThrow('options must be provided')
        const options = { passive: false, once: true, capture: true }
        expect(getEventListenerOptions(options)).toMatchObject(options)
    })
})
