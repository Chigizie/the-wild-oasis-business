import { auth } from "@/app/_components/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
