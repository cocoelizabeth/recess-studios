import { useState, useEffect } from 'react'

export function useShoppingBag() {
    
    const [status, setStatus] = useState(false)
    const handleSetStatus = () => setStatus(!status)
    return [status, handleSetStatus]
    // debugger
}

