import { NextResponse, NextRequest } from "next/server"

export function GET(req: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "name - 1", email: "email__1@gmail.com" },
    { id: 2, name: "name - 2", email: "email__2@gmail.com" },
    { id: 3, name: "name - 3", email: "email__3@gmail.com" },
    { id: 4, name: "name - 4", email: "email__4@gmail.com" },
    { id: 5, name: "name - 5", email: "email__5@gmail.com" },
    { id: 6, name: "name - 6", email: "email__6@gmail.com" },
    { id: 7, name: "name - 7", email: "email__7@gmail.com" },
    { id: 8, name: "name - 8", email: "email__8@gmail.com" },
    { id: 9, name: "name - 9", email: "email__9@gmail.com" },
    { id: 10, name: "name - 10", email: "email__10@gmail.com" },
    { id: 11, name: "name - 11", email: "email__11@gmail.com" },
    { id: 12, name: "name - 12", email: "email__12@gmail.com" },
    { id: 13, name: "name - 13", email: "email__13@gmail.com" },
    { id: 14, name: "name - 14", email: "email__14@gmail.com" },
  ])
}
