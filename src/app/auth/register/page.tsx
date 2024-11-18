import { RegisterForm } from "@/components/auth/register-form";

export const metadata = {
  title: "تسجيل حساب جديد",
  description: "قم بإنشاء حساب جديد للاستفادة من جميع الميزات.",
};

const RegisterPage = () => {
  return (
    <RegisterForm />
  );
};

export default RegisterPage;
