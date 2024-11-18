import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="خطأ"
      descriptionLabel="حدث خطأ. يرجى المحاولة مرة أخرى."
      backButtonHref="/auth/login"
      backButtonLabel="العودة إلى تسجيل الدخول"
    >
      <div className="flex w-full items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
