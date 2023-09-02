export type UserRoleType = "client" | "admin" | "super"

export type User = {
  id: number
  name: string
  nickname: string
  email: string
  password: string
  role: UserRoleType
  credits: number
  token: string
}
