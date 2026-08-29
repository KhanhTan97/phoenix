/**
 * Node modules
 */
import { Form, Link, useActionData, useNavigation } from "react-router";

/**
 * Custom modules
 */
import { banner, logoDark, logoLight } from "@/assets/assets";

/**
 * Components
 */
import PageTitle from "@/components/PageTitle";
import TextField from "@/components/TextField";
import { Button } from "@/components/Button";
import { CircularProgress, LinearProgress } from "@/components/Progress";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Register = () => {
  const navigation = useNavigation();

  const error = useActionData();

  console.log(error);

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: "error",
      });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title="Create an account" />

      <div className="relative w-screen h-dvh ring-2 p-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2">
        <div className="flex flex-col p-4">
          <Link to="/" className="max-w-max mb-auto mx-auto lg:mx-0">
            <img
              src={logoLight}
              alt="phoenix logo"
              width={133}
              height={44}
              className="dark:hidden"
            />

            <img
              src={logoDark}
              alt="phoenix logo"
              width={133}
              height={44}
              className="hidden dark:block"
            />
          </Link>

          <div className="flex flex-col gap-2 max-w-120 w-full mx-auto">
            <h2 className="text-display-small text-on-background text-center">
              Create an account
            </h2>

            <p className="text-body-large text-on-surface-variant mt-1 mb-5 text-center px-2">
              Register today and gain access to powerful tools that will
              supercharge your ideas.
            </p>

            <Form method="POST" className="grid grid-cols-1 gap-4">
              <TextField
                fieldClasses="w-full"
                type="text"
                name="name"
                label="Full name"
                placeholder="Full name"
                required={true}
                autoFocus={true}
              />

              <TextField
                fieldClasses="w-full"
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                required={true}
                autoFocus={false}
              />

              <TextField
                fieldClasses="w-full"
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                required={true}
                autoFocus={false}
              />

              <Button
                type="submit"
                classes="hover:cursor-pointer"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Create account"
                )}
              </Button>
            </Form>

            <p className="text-body-medium text-on-surface-variant text-center mt-4">
              Already have an account ?
              <Link
                to="/login"
                className="link text-label-large inline-block ms-1 text-on-surface"
              >
                Sign in
              </Link>
            </p>
          </div>

          <p className="mt-auto mx-auto text-on-surface-variant text-body-medium lg:mx-0">
            &copy; 2026 codewithsadee. All right reserved.
          </p>
        </div>

        <div className="hidden img-box lg:block lg:relative lg:rounded-large">
          <img src={banner} alt="" className="img-cover" />

          <p className="absolute bottom-10 left-12 right-12 z-10 text-display-large font-semibold leading-tight text-right text-on-surface drop-shadow-sm 2xl:text-[72px]">
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === "loading" && (
          <LinearProgress classes="absolute top-0 left-0 right-0" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Register;
