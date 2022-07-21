import { useState, useEffect } from 'react'

export function useShoppingBag() {
    // debugger
    const [status, setStatus] = useState(false)
    const handleSetStatus = () => setStatus(!status)
    return [status, handleSetStatus]
    // debugger
}

