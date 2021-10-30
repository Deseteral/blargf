export interface PudeukoItem {
  id: string,
  text: string,
  link: {
    url: string
  },
  icon: {
    src: string
  },
}

export interface Pudeuko {
  items: PudeukoItem[]
}
