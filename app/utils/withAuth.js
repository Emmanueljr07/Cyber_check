// // utils/withAuth.js
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useValue } from "../context/AuthContext";

// const withAuth = (WrappedComponent) => {
//   const Wrapper = (props) => {
//     const { user } = useValue();
//     const router = useRouter();

//     useEffect(() => {
//       // If the user is not authenticated, redirect them to the login page
//       if (!user) {
//         router.push("/sign-in");
//       }
//     }, [user, router]);

//     return <WrappedComponent {...props} />;
//   };

//   return Wrapper;
// };

// export default withAuth;
