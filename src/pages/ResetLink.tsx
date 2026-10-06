/**
 * Node modules
 */
import { Form, useActionData, useNavigation } from "react-router";

/**
 * Custom modules
 */
import { banner } from "@/assets/assets";

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
import Logo from "@/components/Logo";

const ResetLink = () => {
  const navigation = useNavigation();

  const actionData = useActionData();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (actionData) {
      showSnackbar({
        message: actionData.message,
        type: actionData.ok ? "info" : "error",
        timeout: 8000,
      });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title="Reset password" />

      <div className="relative w-screen h-dvh ring-2 p-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2">
        <div className="flex flex-col p-4">
          <Logo classes="mb-auto mx-auto lg:mx-0" />

          <div className="flex flex-col gap-2 max-w-120 w-full mx-auto">
            <h2 className="text-display-small text-on-background text-center">
              Forgot your password ?
            </h2>

            <p className="text-body-large text-on-surface-variant mt-1 mb-5 text-center px-2">
              Enter your email, we&apos;ll send a password reset link.
            </p>

            <Form method="POST" className="grid grid-cols-1 gap-4">
              <TextField
                fieldClasses="w-full"
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                helperText="The verification link sent to your email address will be valid for 1 hour."
                required={true}
                autoFocus={true}
              />

              <Button
                type="submit"
                classes="hover:cursor-pointer"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Get link"
                )}
              </Button>
            </Form>
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

export default ResetLink;
