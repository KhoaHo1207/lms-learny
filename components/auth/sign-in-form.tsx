import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SignInForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Email Account </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" variant={"outline"}>
          <Image
            src={"/github.svg"}
            alt="Github"
            width={20}
            height={20}
            priority
            className="size-4"
          />
          Sign in with Github
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:z-0 after:top-1/2 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="johndoe@gmail.com" />
          </div>

          <Button className="w-full">Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
