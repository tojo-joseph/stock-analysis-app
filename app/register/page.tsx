import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
  return (
    <div
      className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10"
      style={{
        backgroundImage: "url('/images/login_banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  );
}
