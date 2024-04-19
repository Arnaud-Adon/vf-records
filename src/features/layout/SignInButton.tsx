import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <form>
      <Button
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        Connexion
      </Button>
    </form>
  );
};
