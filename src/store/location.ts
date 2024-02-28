import { create } from 'zustand'

type State = {
  location: string
}

type Action = {
  setLocation: (location: State['location']) => void
}

export const useLocation = create<State & Action>((set) => {
  return {
    location: 'home',
    setLocation: (location) => set(() => ({ location })),
  }
})
