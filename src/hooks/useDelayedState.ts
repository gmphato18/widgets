import React from "react"
import { useCallback, useEffect, useState } from "react"

const useDelayedState = <T extends unknown>(
    initialState: T
): [state: T, action: (newState: T, delay: number) => void] => {
    const [state, setState] = useState(initialState)
    const timeoutRef = React.useRef<any>(null)

    const setStateWithDelay = useCallback((newState: T, delay: number) => {
        clearTimeout(timeoutRef.current as any)
        timeoutRef.current = null

        if (delay === 0) {
            setState(newState)
            return
        }

        timeoutRef.current = setTimeout(() => {
            setState(newState)
            timeoutRef.current = null
        }, delay)
    }, [])

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [state])

    return [state, setStateWithDelay]
}

export default useDelayedState