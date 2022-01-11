import React from "react";


export let StoreContext = React.createContext({} as any)

export type ProviderType = {
    store: any
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}