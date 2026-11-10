import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useUserStore = create()(
    persist((set) => ({
        session: undefined, 
        setSession: (user) => {
            set({user})
        },
        clearSession: () => {
            set({ session: undefined })
        },
    }),
    {
        name: "user-storage",
        storage: createJSONStorage(() => localStorage),
    },
),
)