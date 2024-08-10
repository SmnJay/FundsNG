import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(reg) { }, {
    callbacks: {
        authorized: ({ req, token }) => {
            if (req.nextUrl.pathname.startsWith("/dashboard") && token === null) {
                return false;
            }

            if (req.nextUrl.pathname.startsWith("/settings") && token === null) {
                return false;
            }

            // if (req.nextUrl.pathname.startsWith("/verify-otp") && token === null) {
            //     return false;
            // }
            
            if (req.nextUrl.pathname.startsWith("/complete-profile") && token === null) {
                return false;
            }
            
            // if (req.nextUrl.pathname.startsWith("/ready") && token === null) {
            //     return false;
            // }

            // if (req.nextUrl.pathname.startsWith("/verify-email") && token === null) {
            //     return false;
            // }

            return true;
        },
    },
});

export const config = {
    matcher: ["/dashboard", "/settings"],
};
